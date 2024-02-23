import React, { useState, useEffect } from 'react';
import APIService from './Service/APIService';
const apiService = new APIService();

const HomeScreen = () => {
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [sortBy, setSortBy] = useState('typeName');
    const [selectedLocation, setSelectedLocation] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const jwtToken = localStorage.getItem("jwtToken");
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
    }, [sortBy]);

    const filterAndSortProjects = () => {
        const sortedProjects = [...filteredProjects].sort((a, b) => {
            if (sortBy === 'typeName') {
                return a.type.localeCompare(b.type);
            } else if (sortBy === '-typeName') {
                return b.type.localeCompare(a.type);
            }
            return 0;
        });
        setFilteredProjects(sortedProjects);
    };

    const handleSortByChange = (event) => {
        setSortBy(event.target.value);
    };

    const handleLocationClick = (id) => {
        const location = projects.find(project => project.id === id);
        setSelectedLocation(location);
    };

    const ProjectItem = ({ imageUrl, typeName, locationName, id }) => (
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#" onClick={() => handleLocationClick(id)}>
                <img src={imageUrl} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                <div className="px-4 py-3 w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">{typeName}</span>
                    <p className="text-lg font-bold text-black truncate block capitalize">{locationName}</p>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3"> Đánh giá</p>
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
            </a>
        </div>
    );

    return (
        <>
            {selectedLocation && (
                <div className="fixed top-0 left-0 w-full h-full bg-white flex justify-center items-center">
                    <div className="bg-white p-4 rounded-md">
                        <p>Type Name: {selectedLocation.type}</p>
                        <p>Location Name: {selectedLocation.name}</p>
                        <button onClick={() => setSelectedLocation(null)}>Close</button>
                    </div>
                </div>
            )}

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
                </div>
            </div>

            <section id="Projects"
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 pb-20">
                {filteredProjects.map((project, index) => (
                    <ProjectItem key={index} {...project} />
                ))}
            </section>
        </>
    );
};

export default HomeScreen;
