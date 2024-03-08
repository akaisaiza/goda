import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import APIService from './Service/APIService';
import LocationModal from './LocationModal';

const ChatComponent = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [jwt, setJwt] = useState('');
    const router = useRouter();
    const apiService = new APIService();
    const [openModal, setOpenModal] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        const el = document.getElementById('messages');
        el.scrollTop = el.scrollHeight;
    }, [messages]);

    useEffect(() => {
        const storedJwt = localStorage.getItem("jwtToken");
        if (!storedJwt || storedJwt === undefined) {
            router.push('/Auth/login');
        } else {
            setJwt(storedJwt);
        }
    }, [router]);

    const onCloseModal = () => setOpenModal(false);

    const handleLocationClick = (id) => {
        setOpenModal(true);
        setSelectedLocation(id);
    };

    const sendMessage = async (e, message) => {
        e.preventDefault();
        if (!message.trim()) return;

        setNewMessage('');
        setIsTyping(true); // Bắt đầu hiển thị typing effect

        const userMessage = {
            id: new Date().getTime(),
            text: message,
            sender: 'user',
        };

        setMessages([...messages, userMessage]);

        try {
            const response = await apiService.postData('api/chat', {
                content: message,
                session_id: jwt ?? "test",
                longitude: 0,
                latitude: 0,
            }, jwt);

            const { answer, places } = response.response;
            const parsedPlaces = JSON.parse(places);
            const locationDetails = answer.split(/(?=\d\. ")/);

            const botMessage = {
                id: new Date().getTime() + 1,
                text: locationDetails,
                sender: 'bot',
                places: parsedPlaces,
            };

            setMessages((prevMessages) => [...prevMessages, botMessage]);
            setIsTyping(false); // Dừng hiển thị typing effect
        } catch (error) {
            console.error('Error sending message:', error);
            setIsTyping(false); // Dừng hiển thị typing effect nếu có lỗi
        }
    };


    const botAvatar = '/assets/goda_logo.png';

    return (
        <div className="flex-1 p-4 sm:p-8 justify-between flex flex-col custom-height-sm bg-gray-100 rounded-lg shadow">
            <div className="flex justify-center">
                <div style={{ color: "#595959", backgroundColor: "white" }} className="text-center md:flex items-center bg-white border-[1px] border-[#595959] max-w-[650px] rounded-[5px] mb-1 px-3 py-1">
                    <div className="flex justify-center">
                        <div className="">
                            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 15H12.01M12 12V9M4.98207 19H19.0179C20.5615 19 21.5233 17.3256 20.7455 15.9923L13.7276 3.96153C12.9558 2.63852 11.0442 2.63852 10.2724 3.96153L3.25452 15.9923C2.47675 17.3256 3.43849 19 4.98207 19Z" stroke="#595959" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </div>
                    </div>
                    <div className="mx-2 text-xs" style={{ color: "#595959" }}>Sản phẩm đang trong quá trình dùng thử tại huyện Thạch Thất - Hà Nội</div>
                </div>
            </div>
            <div id="messages" className="flex flex-col space-y-4 p-4 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                {messages.map((message) => (
                    <div key={message.id} className={`chat-message flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {message.sender === 'bot' && (
                            <img src={botAvatar} alt="Bot Avatar" className="w-8 h-8 rounded-full mr-2" />
                        )}
                        <div className={`flex flex-col space-y-2 text-xs max-w-xs mx-2 items-${message.sender === 'user' ? 'end' : 'start'}`}>
                            <div>
                                <span className={`px-1 py-2 rounded-lg inline-block ${message.sender === 'user' ? 'bg-blue-500 text-white rounded-br-none' : 'bg-gray-300 text-gray-600 rounded-bl-none'}`}>
                                    {message.text}
                                </span>
                            </div>
                            {message.sender === 'bot' && (
                                <div className="card gap-4 md:grid-cols-2 lg:grid-cols-4">
                                    {message.places.map((place) => (
                                        <div key={place.id} className="place-card p-4 my-4 border rounded-lg shadow-md">
                                            <h3 className="text-xl font-semibold mb-2">{place.name}</h3>

                                            <p className={`"text-gray-600" ${place.avg_rate ? "" : "hidden"}`}>Đánh giá: {place.avg_rate} ⭐</p>
                                            <img src={place.image_link} alt={place.name} className="mt-2 rounded-lg" />
                                            <div className='flex py-6'>
                                                <div className="flex items-center mr-4"> {/* Container cho "Vị Trí" */}
                                                    <a className='flex items-center tracking-wide py-2 px-3 sm:px-8 border border-blue-500 text-blue-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-blue-500 hover:text-white-500 transition-all hover:shadow-blue' href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place?.name)}`} target="_blank" rel="noopener noreferrer">
                                                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                                            <g id="SVGRepo_iconCarrier">
                                                                <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#27B3E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#27B3E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            </g>
                                                        </svg>
                                                        <div className=''>Vị Trí</div>
                                                    </a>
                                                </div>
                                                <button className='flex items-center tracking-wide py-2 px-3 sm:px-8 border border-blue-500 text-blue-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-blue-500 hover:text-white-500 transition-all hover:shadow-blue' onClick={() => handleLocationClick(place.id)}>Chi tiết</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {message.sender === 'user' && (
                            <img src={'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'} alt="Bot Avatar" className="w-8 h-8 rounded-full mr-2" />
                        )}
                    </div>
                ))}
                {isTyping && (
                    <div className="flex justify-start">
                        <img src={botAvatar} alt="Bot Avatar" className="w-8 h-8 rounded-full mr-2" />
                        <div className="typing-indicator">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                )}
            </div>
            <div className="px-4 pt-4 mb-2 sm:mb-0 bg-white">
                <form className="relative flex" onSubmit={(e) => sendMessage(e, newMessage)}>
                    <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Write your message!" className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-5 bg-gray-200 rounded-md py-3" />
                    <button type="submit" className="absolute right-0 items-center inset-y-0 sm:flex px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 focus:outline-none">
                        Gửi
                    </button>
                </form>
            </div>
            <LocationModal
                openModal={openModal}
                onCloseModal={onCloseModal}
                selectedLocationid={selectedLocation}
            />
        </div>
    );
};

export default ChatComponent;
