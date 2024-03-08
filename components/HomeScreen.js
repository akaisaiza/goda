import React, { useState, useEffect } from 'react';
import APIService from './Service/APIService';
import LocationModal from './LocationModal';
const apiService = new APIService();

const HomeScreen = ({ openChat }) => {
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [sortBy, setSortBy] = useState('typeName');
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [starFilter, setStarFilter] = useState(null);
    const [typeFilter, setTypeFilter] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const jwtToken = localStorage.getItem("jwtToken");
    const [isLoading, setIsLoading] = useState(false);
    // const getProjectsFromCache = () => {
    //     const cachedProjects = localStorage.getItem('projects');
    //     return cachedProjects ? JSON.parse(cachedProjects) : null;
    // };

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await apiService.fetchData('api/location/all', jwtToken);
                setProjects(response);
                setFilteredProjects(response);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        filterAndSortProjects();
        localStorage.setItem('projects', JSON.stringify(projects));
    }, [sortBy, starFilter, typeFilter, searchTerm, projects]);

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
                (!typeFilter || project.type === typeFilter) &&
                (!searchTerm || project.name.toLowerCase().includes(searchTerm.toLowerCase()));
        });
        setFilteredProjects(filtered);
    };

    const handleSortByChange = (event) => {
        setSortBy(event.target.value);
    };

    const handleStarFilterChange = (event) => {
        setStarFilter(event.target.value === 'all' ? null : event.target.value);
    };

    const handleTypeFilterChange = (event) => {
        setTypeFilter(event.target.value === 'all' ? null : event.target.value);
    };

    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleLocationClick = (id) => {
        const location = projects.find(project => project.id === id);
        setSelectedLocation(location);
        setOpenModal(true);
    };

    const onCloseModal = () => {
        setOpenModal(false);
    };

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
            <div className="md:flex md:justify-between md:items-center">

                <form class="py-1">
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" value={searchTerm}
                            onChange={handleSearchInputChange}
                            placeholder="Tìm kiếm theo tên" id="default-search" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                </form>



                <div className="flex flex-wrap py-1">
                    <select value={sortBy} onChange={handleSortByChange} className="mr-1 p-1 border rounded">
                        <option value="typeName">A-Z</option>
                        <option value="-typeName">Z-A</option>
                    </select>

                    <select value={starFilter || 'all'} onChange={handleStarFilterChange} className="mr-1 p-1 border rounded">
                        <option value="all">Tất cả sao</option>
                        <option value="5">5 sao</option>
                        <option value="4">4 sao</option>
                        <option value="3">3 sao</option>
                        <option value="2">2 sao</option>
                        <option value="1">1 sao</option>
                    </select>

                    <select value={typeFilter || 'all'} onChange={handleTypeFilterChange} className="mr-1 p-1 border rounded">
                        <option value="all">Tất cả loại</option>
                        <option value="1">Đồ uống và check-in</option>
                        <option value="2">Khám phá Ẩm thực</option>
                        <option value="3">Trải Nghiệm Giải Trí</option>
                        <option value="other">Khác</option>
                    </select>

                </div>
                <button className='flex items-center tracking-wide py-1 px-5 sm:px-8 border border- blue-500 text- blue-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-blue-500 hover:text-white-500 transition-all hover:shadow-blue' onClick={() => openChat("chat")}>            <img src="/assets/goda_logo.png" className="h-6 w-auto px-2" /><p>Trò chuyện ngay</p>
                </button>

            </div>
            {isLoading ? (
                <div className="flex justify-center items-center py-[200px]">
                    <div role="status">
                        <svg aria-hidden="true" class="inline w-10 h-10 text-blue-500 animate-spin dark:text-black-500 fill-black-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            ) : (

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
            )}
            <LocationModal
                openModal={openModal}
                onCloseModal={onCloseModal}
                selectedLocationid={selectedLocation?.id}
            />
        </>
    );
};

export default HomeScreen;
