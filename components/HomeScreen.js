import React, { useState, useEffect } from 'react';
import APIService from './Service/APIService';
import "react-responsive-modal";
import { Modal } from "react-responsive-modal";
import LocationDetail from './LocationDetail';
const apiService = new APIService();

const HomeScreen = () => {
    const [userData, setUserData] = useState(null);
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [sortBy, setSortBy] = useState('typeName');
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [starFilter, setStarFilter] = useState(null); // Trạng thái cho số sao
    const [typeFilter, setTypeFilter] = useState(null); // Trạng thái cho loại
    const [openModal, setOpenModal] = useState(false);
    const [rating, setRating] = useState('');
    const jwtToken = localStorage.getItem("jwtToken");
    const dayOfWeek = {
        monday: 'Thứ 2',
        tuesday: 'Thứ 3',
        wednesday: 'Thứ 4',
        thursday: 'Thứ 5',
        friday: 'Thứ 6',
        saturday: 'Thứ 7',
        sunday: 'Chủ nhật'
    };
    const handleRatingChange = (event) => {
        setRating(event.target.value);
    };
    const handleSubmitReview = async (event) => {
        event.preventDefault();

        const comment = document.getElementById('comment').value;
        document.getElementById('comment').value = '';

        const reviewData = {
            name: userData?.username,
            reviewTime: new Date().toISOString(),
            rating: rating + " stars",
            reviewContent: comment
        };

        try {
            const response = await await apiService.postData(`api/reviews/${selectedLocation?.id}`, reviewData, jwtToken);
            console.log('Review posted successfully:', response.data);
            document.getElementById('comment').value = '';
        } catch (error) {
            console.error('Error posting review:', error);
        }
    };
    useEffect(() => {
        const username = localStorage.getItem('username');
        const id = localStorage.getItem('id');
        const email = localStorage.getItem('email');
        setUserData({ username, id, email });
    }, []);
    const summaryIndex = selectedLocation?.text.indexOf("Summary:");
    const summaryText = summaryIndex !== -1 ? selectedLocation?.text.substring(summaryIndex + "Summary:".length) : null;

    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await apiService.fetchData('api/location/near?distance=20&longitude=105.84117000&latitude=21.02450000', jwtToken);
                setProjects(response);
                setFilteredProjects(response);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        filterAndSortProjects();
    }, [sortBy, starFilter, typeFilter]);

    const filterAndSortProjects = () => {
        const sortedProjects = [...projects].sort((a, b) => {
            if (sortBy === 'typeName') {
                return a.type.localeCompare(b.type);
            } else if (sortBy === '-typeName') {
                return b.type.localeCompare(a.type);
            }
            return 0;
        });
        const filtered = sortedProjects.filter(project => {
            return (!starFilter || parseFloat(project.avg_rate) === parseFloat(starFilter)) &&
                (!typeFilter || project.type === typeFilter);
        });
        setFilteredProjects(filtered);
    };

    const handleSortByChange = (event) => {
        setSortBy(event.target.value);
    };

    const handleStarFilterChange = (event) => {
        setStarFilter(event.target.value === 'all' ? null : event.target.value);
    }

    const handleTypeFilterChange = (event) => {
        setTypeFilter(event.target.value === 'all' ? null : event.target.value);
    }

    const handleLocationClick = (id) => {
        const location = projects.find(project => project.id === id);
        setSelectedLocation(location);
        setOpenModal(true);
    };

    const onCloseModal = () => {
        setOpenModal(false);
    }

    const ProjectItem = ({ name, image_link, type, id, avg_rate }) => {
        let typeName = '';
        if (type === '1') {
            typeName = 'Đồ uống và check-in';
        } else if (type === '2') {
            typeName = 'Khám phá Ẩm thực';
        } else if (type === '3') {
            typeName = 'Trải Nghiệm Giải Trí';
        } else {
            typeName = 'Khác';
        }

        return (
            <>
                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <div onClick={() => handleLocationClick(id)}>
                        <img src={image_link} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                        <div className="px-4 py-3 w-72">
                            <span className="text-gray-400 mr-3 uppercase text-xs">{typeName}</span>
                            <p className="text-lg font-bold text-black truncate block capitalize text-start">{name}</p>
                            <div className="flex items-center">
                                <p className="text-md font-semibold text-black cursor-auto my-3"> Đánh giá : </p> {avg_rate}/5 ⭐
                                <div className="ml-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                        className="bi bi-bag-plus" viewBox="0 0 16 16">
                                        <path fillRule="evenodd"
                                            d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                        <path
                                            d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    return (
        <>
            <div>
                <div className="mb-1">
                    <button onClick={filterAndSortProjects} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Bộ lọc
                    </button>
                </div>
                <div className='flex'>
                    <select value={sortBy} onChange={handleSortByChange} className="mr-2 p-2 border rounded">
                        <option value="typeName">A-Z</option>
                        <option value="-typeName">Z-A</option>
                    </select>

                    <select value={starFilter || 'all'} onChange={handleStarFilterChange} className="mr-2 p-2 border rounded">
                        <option value="all">Tất cả sao</option>
                        <option value="5">5 sao</option>
                        <option value="4">4 sao</option>
                        <option value="3">3 sao</option>
                        <option value="2">2 sao</option>
                        <option value="1">1 sao</option>
                    </select>

                    <select value={typeFilter || 'all'} onChange={handleTypeFilterChange} className="mr-2 p-2 border rounded">
                        <option value="all">Tất cả loại</option>
                        <option value="1">Đồ uống và check-in</option>
                        <option value="2">Khám phá Ẩm thực</option>
                        <option value="3">Trải Nghiệm Giải Trí</option>
                        <option value="other">Khác</option>
                    </select>
                </div>
            </div>

            <section id="Projects"
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 pb-20">
                {filteredProjects.map((project, index) => {
                    if (project.image_link === 'https://maps.gstatic.com/tactile/pane/default_geocode-1x.png' || project.image_link === 'https://maps.gstatic.com/tactile/pane/default_geocode-2x.png') {
                        return null;
                    } else {
                        return <ProjectItem key={index} {...project} />;
                    }
                })}
            </section>

            {/* <LocationDetail id={selectedLocation?.id} open={openModal} onClose={() => setOpenModal(false)}/> */}
            <div className={`overflow-y-auto overflow-x-hidden bg-gray-500 bg-opacity-75 fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full max-h-full ${openModal ? 'block' : 'hidden'}`}>
                <div className='flex justify-center'>

                <div className="relative p-4 w-full max-w-2xl bg-white-500 p-6">
                    <button onClick={onCloseModal} className="absolute top-0 right-0 mt-2 mr-2 text-black-500 hover:text-gray-700">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <h1 className='text-[40px] font-bold'>{selectedLocation?.name}</h1>
                    <div className='py-3'>
                        <img src={selectedLocation?.image_link} className='w-full h-full' style={{ borderRadius: "5px" }} />
                    </div>

                    <a className='flex items-center py-1' href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedLocation?.name)}`} target="_blank" rel="noopener noreferrer">
                        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#27B3E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#27B3E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        <div className='ml-3'>{selectedLocation?.address}</div>
                    </a>
                    <div className='flex items-center py-1'>
                        <div>
                            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill="#FFFF00"></path> </g></svg>
                        </div>
                        <div className='ml-3'>{selectedLocation?.avg_rate}</div>

                        <div className='px-2'>
                            reviews
                        </div>
                    </div>
                    <div className='flex py-1 items-center'>
                        <div>
                            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3.51089 2L7.15002 2.13169C7.91653 2.15942 8.59676 2.64346 8.89053 3.3702L9.96656 6.03213C10.217 6.65159 10.1496 7.35837 9.78693 7.91634L8.40831 10.0375C9.22454 11.2096 11.4447 13.9558 13.7955 15.5633L15.5484 14.4845C15.9939 14.2103 16.5273 14.1289 17.0314 14.2581L20.5161 15.1517C21.4429 15.3894 22.0674 16.2782 21.9942 17.2552L21.7705 20.2385C21.6919 21.2854 20.8351 22.1069 19.818 21.9887C6.39245 20.4276 -1.48056 1.99997 3.51089 2Z" stroke="#27B3E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </div>
                        <div className='px-3'>
                            {selectedLocation?.phone_number ? selectedLocation?.phone_number : "Không có SĐT"}
                        </div>
                    </div>
                    <div className='py-1 flex items-center'>
                        <div>
                            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#27B3E2"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 8V12L15 15" stroke="#27B3E2" stroke-width="2" stroke-linecap="round"></path> <circle cx="12" cy="12" r="9" stroke="#27B3E2" stroke-width="2"></circle> </g></svg>
                        </div>
                        <div className='px-3'>Giờ mở cửa: </div>
                    </div>
                    <div className="relative overflow-x-auto block md:hidden">
                        {Object.keys(dayOfWeek).map((day, index) => (
                            <div key={index} className="py-1 px-10 ">
                                <span className="font-semibold">{dayOfWeek[day]}:</span>
                                <span className="ml-2">{selectedLocation?.business_hours[day] ? selectedLocation?.business_hours[day] : "Không có"}</span>
                            </div>
                        ))}
                    </div>


                    <div class="relative overflow-x-auto hidden md:block">
                        <table class="w-full text-sm text-left rtl:text-right text-black">
                            <thead class="text-xs text-black uppercase bg-gray-200">
                                <tr className='border-b dark:bg-gray-800 dark:border-gray-700'>
                                    <th scope="col" class="px-6 py-3">
                                        Thứ 2
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Thứ 3
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Thứ 4
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Thứ 5
                                    </th>
                                    <th>
                                        Thứ 6
                                    </th>
                                    <th>
                                        Thứ 7
                                    </th>
                                    <th>
                                        Chủ nhật
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                                    <th class="px-3 py-3 whitespace-nowrap">
                                        {selectedLocation?.business_hours?.monday ? selectedLocation?.business_hours?.monday : "Không có"}
                                    </th>
                                    <td class="px-3 whitespace-nowrap">
                                        {selectedLocation?.business_hours?.tuesday ? selectedLocation?.business_hours?.tuesday : "Không có"}
                                    </td>
                                    <td class="px-3 whitespace-nowrap">
                                        {selectedLocation?.business_hours?.wednesday ? selectedLocation?.business_hours?.wednesday : "Không có"}
                                    </td>
                                    <td class="px-3 whitespace-nowrap">
                                        {selectedLocation?.business_hours?.thursday ? selectedLocation?.business_hours?.thursday : "Không có"}
                                    </td>
                                    <td>
                                        {selectedLocation?.business_hours?.friday ? selectedLocation?.business_hours?.friday : "Không có"}
                                    </td>
                                    <td className='px-3 whitespace-nowrap'>
                                        {selectedLocation?.business_hours?.saturday ? selectedLocation?.business_hours?.saturday : "Không có"}
                                    </td>
                                    <td class="px-3 py-3 whitespace-nowrap">
                                        {selectedLocation?.business_hours?.sunday ? selectedLocation?.business_hours?.sunday : "Không có"}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="font-semibold p-2" >  Mô tả :</div>
                    {summaryText}
                    <div>
                        <section class="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
                            <div class="max-w-2xl mx-auto px-4">
                                <div class="flex items-center mb-6">
                                    <div className='px-3'>
                                        <svg width="10px" height="10px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="white"></rect> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" fill="#27B3E2"></path> </g></svg>
                                    </div>
                                    <div>{selectedLocation?.reviews?.length} Bình Luận</div>                            </div>
                                <form class="mb-6" onSubmit={handleSubmitReview}>
                                    <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                                        <img className="mr-2 w-6 h-6 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" />
                                        {userData?.username}
                                    </p>
                                    <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                                        <label for="comment" class="sr-only">Your comment</label>
                                        <textarea id="comment" rows=""
                                            class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                                            placeholder="Write a comment..." required></textarea>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Đánh giá sao:</label>
                                        <select id="rating" value={rating} onChange={handleRatingChange} className="mt-1 block py- px- border-none  bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                                            <option value="1">⭐</option>
                                            <option value="2">⭐⭐</option>
                                            <option value="3">⭐⭐⭐</option>
                                            <option value="4">⭐⭐⭐⭐</option>
                                            <option value="5">⭐⭐⭐⭐⭐</option>
                                        </select>
                                    </div>
                                    <button type="submit"
                                        class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                                        Đăng
                                    </button>
                                </form>
                                <article class="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
                                    <div>
                                        {selectedLocation?.reviews.map((review, index) => (
                                            <div key={index} className="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
                                                <footer className="flex justify-between items-center mb-2">
                                                    <div className="flex items-center">
                                                        <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                                                            <img className="mr-2 w-6 h-6 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt={review.name} />
                                                            {review.name}
                                                        </p>
                                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                                            {review.reviewTime ? new Date(review.reviewTime).toLocaleDateString() : ""}
                                                        </p>
                                                    </div>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">{review.rating} ⭐</p>
                                                </footer>
                                                <p className="text-gray-500 dark:text-gray-400">{review.reviewContent || ""}</p>
                                            </div>
                                        ))}
                                    </div>
                                </article>
                            </div>
                        </section>
                    </div>
                </div>

                </div>
            </div>
        </>
    );
};

export default HomeScreen;
