import React, { useState } from "react";
import APIService from "../../components/Service/APIService";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const apiService = new APIService()
    const handleLogin = async (e) => {
        e.preventDefault(); 
        try {
            const data = { username, password };
            const response = await apiService.postData('api/auth/signin', data);
            localStorage.setItem('jwtToken', response.accessToken);
            localStorage.setItem('username', response.username);
            localStorage.setItem('id', response.id);
            localStorage.setItem('email', response.email);
            window.location.href = '/Home';
        } catch (error) {
            setError('Đăng nhập thất bại');
        }
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-10 mr-2" src="/assets/goda_logo.png" alt="logo" />
                    Goda AI
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h2 className="text-sm font-bold leading-tight tracking-tight text-gray-800 md:text-2xl dark:text-white">
                            Hãy đăng nhập để du lịch ở khắp mọi nơi
                        </h2>
                        {error && <p className="text-red-500">{error}</p>}
                        <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm  text-gray-900 dark:text-white">Tên đang nhập</label>
                                <input type="text" name="username" value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm  text-gray-900 dark:text-white">Mật khẩu</label>
                                <input type="password" value={password}
                                    onChange={(e) => setPassword(e.target.value)} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="flex items-center justify-between">
                                <a href="" className="text-sm  text-primary-600 hover:underline dark:text-primary-500">Quên mật khẩu?</a>
                            </div>
                            <button type="submit" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                Đăng nhập
                            </button>
                            <p className="text-sm font-light ">
                                Chưa tạo tài khoản ? <a href="/Auth/register" className=" text-primary-600 hover:underline dark:text-primary-500">Đăng kí</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
