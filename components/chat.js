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
            <div id="messages" className="flex flex-col space-y-4 p-4 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                {messages.map((message) => (
                    <div key={message.id} className={`chat-message flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {message.sender === 'bot' && (
                            <img src={botAvatar} alt="Bot Avatar" className="w-8 h-8 rounded-full mr-2" />
                        )}
                        <div className={`flex flex-col space-y-2 text-xs max-w-xs mx-2 items-${message.sender === 'user' ? 'end' : 'start'}`}>
                            {message.sender === 'bot' ? (
                                <div>
                                    {message.text.map((text, index) => (
                                        <div key={index}>
                                            <span className={`px-1 py-2 rounded-lg inline-block bg-gray-300 text-gray-600 rounded-bl-none`}>
                                                {text}
                                            </span>
                                            {message.places[index] && (
                                                <div className="place-card p-4 my-4 border rounded-lg shadow-md">
                                                    <h3 className="text-xl font-semibold mb-2">{message.places[index].name}</h3>
                                                    <p className={`"text-gray-600" ${message.places[index].avg_rate ? "" : "hidden"}`}>Đánh giá: {message.places[index].avg_rate} ⭐</p>
                                                    <img src={message.places[index].image_link} alt={message.places[index].name} className="mt-2 rounded-lg" />
                                                    <div className='flex py-6'>
                                                        <button className='flex items-center tracking-wide py-2 px-3 sm:px-8 border border-blue-500 text-blue-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-blue-500 hover:text-white-500 transition-all hover:shadow-blue' onClick={() => handleLocationClick(message.places[index].id)}>Chi tiết</button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <span className={`px-1 py-2 rounded-lg inline-block bg-blue-500 text-white rounded-br-none`}>
                                    {message.text}
                                </span>
                            )}
                        </div>
                        {message.sender === 'user' && (
                            <img src={'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'} alt="User Avatar" className="w-8 h-8 rounded-full mr-2" />
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
            <div className="px-4 pt-4 mb-2 sm:mb-0 bg-white">
            <div className="px-4 pt-4 mb-2 sm:mb-0 bg-white">
    <form className="relative flex" onSubmit={(e) => sendMessage(e, newMessage)}>
        <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Write your message!"
            className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-5 bg-gray-200 rounded-md py-1 resize-none border-none shadow-sm"
            rows="1"
            style={{ lineHeight: '2', overflow: 'hidden',  paddingRight: '80px', boxSizing: 'border-box' }}  // Adjust paddingRight to ensure space for the button
        ></textarea>
        <button type="submit" className=" right-0 top-0 mt-3 p-4 mr-3 items-center sm:flex px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 focus:outline-none">
            Gửi
        </button>
    </form>
</div>

</div>

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
