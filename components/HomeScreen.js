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

    const getProjectsFromCache = () => {
        const cachedProjects = localStorage.getItem('projects');
        return cachedProjects ? JSON.parse(cachedProjects) : null;
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                let cachedProjects = getProjectsFromCache();
                if (!cachedProjects) {
                    const response = await apiService.fetchData('api/location/near?distance=30&longitude=105.84117000&latitude=21.02450000', jwtToken);
                    setProjects(response);
                    setFilteredProjects(response);
                    localStorage.setItem('projects', JSON.stringify(response));
                } else {
                    setProjects(cachedProjects);
                    setFilteredProjects(cachedProjects);
                }
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
            <button className='tracking-wide py-2 px-5 sm:px-8 border border- blue-500 text- blue-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-blue-500 hover:text-white-500 transition-all hover:shadow-blue' onClick={() => openChat("chat")}>Trò chuyện ngay</button>

                <form class="">
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



                <div className="flex flex-wrap">
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

            <LocationModal
                openModal={openModal}
                onCloseModal={onCloseModal}
                selectedLocationid={selectedLocation?.id}
            />
        </>
    );
};

export default HomeScreen;
