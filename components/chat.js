import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import APIService from './Service/APIService';
import LocationModal from './LocationModal';
import Loading from './Loading';
import fakeData from '../pages/data.json'

const ChatComponent = () => {
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [jwt, setJwt] = useState('');
    const router = useRouter();
    const apiService = new APIService();
    const [openModal, setOpenModal] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(null);

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

    useEffect(() => {
        onIntroduction();
    }, [])
    const onCloseModal = () => {
        setOpenModal(false);
    };
    const handleLocationClick = (id) => {
        setOpenModal(true);
        setSelectedLocation(id);
    };

    const onIntroduction = () => {
        const botMessage = {
            id: new Date().getTime() + 1,
            text: "Xin chào, tôi là trợ lý Goda AI - một sản phẩm của nhóm Terror thuộc Đại học FPT. Hãy cho tôi biết điều bạn cần tìm?",
            sender: 'bot',
            places: [],
        };
        setMessages([...messages, botMessage]);
    }
    const sendMessage = async (e, message) => {
        e.preventDefault();
        if (!message.trim()) return;

        setNewMessage('');

        const userMessage = {
            id: new Date().getTime(),
            text: message,
            sender: 'user',
        };

        setMessages([...messages, userMessage]);

        try {
            setLoading(true);
            const response = await apiService.postData('api/chat', {
                content: message,
                session_id: jwt ?? "test",
                longitude: 0,
                latitude: 0,
            }, jwt);
            setLoading(false);
            const { answer, places } = response.response;
            console.log(response.response)
            const botMessage = {
                id: new Date().getTime() + 1,
                text: answer,
                sender: 'bot',
                places: JSON.parse(places),
            };

            console.log(botMessage);

            setMessages((prevMessages) => [...prevMessages, botMessage]);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };


    const fakeMessage = async (e, message) => {
        e.preventDefault();
        if (!message) return;
        setNewMessage('');
        const userMessage = {
            id: new Date().getTime(),
            text: message,
            sender: 'user',
        };

        setMessages([...messages, userMessage]);

        if (message == 'Tôi muốn đi cafe với người yêu ở Hòa Lạc') {
            const data1 = fakeData.slice(0, 4)
            const botMessage = {
                id: new Date().getTime() + 1,
                text: "Đó là một ý tưởng tuyệt vời! Tôi có một vài địa điểm lãng mạn gửi tới bạn:",
                sender: 'bot',
                places: data1,
            };
            setLoading(true);
            setTimeout(() => {
                setLoading(false)
                setMessages((prevMessages) => [...prevMessages, botMessage]);
            }, 4000)
        }
        if (message == 'Cho tôi những địa điểm được đánh giá 5 sao') {
            const data2 = fakeData.slice(0, 2)
            const botMessage = {
                id: new Date().getTime() + 1,
                text: "Ok, sau đây là những địa điểm được người dùng đánh giá chất lượng tốt với 5 sao đã được chọn lọc:",
                sender: 'bot',
                places: data2,
            };
            setLoading(true);
            setTimeout(() => {
                setLoading(false)
                setMessages((prevMessages) => [...prevMessages, botMessage]);
            }, 2000)
        }
        if (message == 'Cho tôi địa điểm khác') {
            const data3 = fakeData.slice(4)
            const botMessage = {
                id: new Date().getTime() + 1,
                text: "Tất nhiên rồi, sau đây là một số địa điểm thưởng thức cafe tuyệt vời khác ở gần vị trí của bạn: ",
                sender: 'bot',
                places: data3,
            };
            setLoading(true);
            setTimeout(() => {
                setLoading(false)
                setMessages((prevMessages) => [...prevMessages, botMessage]);
            }, 3000)
        }
        if (message == 'Tôi muốn xem thêm hình ảnh của Greenhome') {
            const images = [
                "https://lh5.googleusercontent.com/p/AF1QipMu4gczjy7OZOO_YVoO2krukfWBqS-6_QBSVO2H=w203-h327-k-no",
                "https://lh5.googleusercontent.com/p/AF1QipNjg8SAamhXhDDELltC7X9B2SUJiW44oDpG_PTM=s508-k-no",
                "https://lh5.googleusercontent.com/p/AF1QipNjg8SAamhXhDDELltC7X9B2SUJiW44oDpG_PTM=s508-k-no",
                "https://lh5.googleusercontent.com/p/AF1QipPrGTUgcGJWMpBS_EmAAcNpr-G_HU8Dmr7WRL4O=s508-k-no",
                "https://lh5.googleusercontent.com/p/AF1QipOAyHxAUHOa1z2uaXgJNwt0o6vs5overTf7S-gj=s846-k-no",
                "https://lh5.googleusercontent.com/p/AF1QipNLji4Ep8WQs3q6wIBUuOYWV9TCQT6PTo4YEwps=s563-k-no"
            ]
            const botMessage = {
                id: new Date().getTime() + 1,
                text: "Có rất nhiều hình ảnh về GreenHome Cafe được người dùng trải nghiệm và chia sẻ lại. Tôi đã tổng hợp cho bạn vài hình ảnh nổi bật:",
                sender: 'bot',
                places: [],
                images: images
            };
            setLoading(true);
            setTimeout(() => {
                setLoading(false)
                setMessages((prevMessages) => [...prevMessages, botMessage]);
            }, 2000)
        }
    }
    const botAvatar = '/assets/goda_logo.png';
    return (
        <div className="flex-1 p-4 sm:p-8 justify-between flex flex-col custom-height-sm bg-gray-100 rounded-lg shadow">
            <div className="text-center" style={{ color: "red" }}>Sản phẩm đang trong quá trình dùng thử tại Hòa Lạc</div>
            <div id="messages" className="flex flex-col space-y-4 p-4 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                {messages.map((message) => (
                    <div key={message.id} className={`chat-message flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {message.sender === 'bot' && (
                            <img src={botAvatar} alt="Bot Avatar" className="w-8 h-8 rounded-full mr-2" />
                        )}
                        <div>
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

                            <div className='grid grid-cols-2 gap-3'>
                                {
                                    message.images ? message.images.map((img) => (
                                        <img src={img} key={img} className='w-[200px] h-auto rounded-[5px]' />
                                    )) : <></>
                                }
                            </div>
                        </div>


                        {message.sender === 'user' && (
                            <img src={'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'} alt="Bot Avatar" className="w-8 h-8 rounded-full mr-2" />
                        )}
                    </div>
                ))}
            </div>
            <div className="px-4 pt-4 mb-2 sm:mb-0 bg-white relative">
                <div className={`absolute top-[-20px] left-[20px] ${loading ? '' : 'hidden'}`}>
                    <Loading />
                </div>
                <form className="relative flex" onSubmit={(e) => sendMessage(e, newMessage)}>
                    <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Write your message!" className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-5 bg-gray-200 rounded-md py-3" />
                    <button type="submit" className="absolute right-0 items-center inset-y-0 sm:flex px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 focus:outline-none">
                        Gửi
                    </button>
                </form>
                {/* <form className="relative flex" onSubmit={(e) => fakeMessage(e, newMessage)}>
                    <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Write your message!" className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-5 bg-gray-200 rounded-md py-3" />
                    <button type="submit" className="absolute right-0 items-center inset-y-0 sm:flex px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 focus:outline-none">
                        Gửi
                    </button>
                </form> */}
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
