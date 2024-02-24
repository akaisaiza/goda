import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import APIService from './Service/APIService';
const isStrongPassword = (password) => {
    return password.length > 6;
};
const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [changePasswordError, setChangePasswordError] = useState('');
    const router = useRouter();
    const apiService = new APIService();

    useEffect(() => {
        const username = localStorage.getItem('username');
        const id = localStorage.getItem('id');
        const email = localStorage.getItem('email');
        setUserData({ username, id, email });
    }, []);

    const handleChangePassword = async () => {
        setChangePasswordError('');
        if (!isStrongPassword(newPassword)) {
            setChangePasswordError('Mật khẩu mới phải chứa ít nhất 6 ký tự');
            return;
        }
        if (newPassword !== confirmPassword) {
            setChangePasswordError('Mật khẩu không khớp');
            return;
        }
        try {
            const jwtToken = localStorage.getItem('jwtToken');
            const response = await apiService.postData('api/account', { email: userData.email, oldPassword: currentPassword, newPassword: newPassword }, jwtToken);
            if (response && response.message === "Password changed successfully") {
                alert("Thay đổi mật khẩu thành công!");
                setCurrentPassword('');
                setNewPassword('');
                setConfirmPassword('');
                setShowChangePasswordModal(false);
            } else {
                setChangePasswordError(response.message || 'Có lỗi xảy ra khi thay đổi mật khẩu');
            }
        } catch (error) {
            console.error('Error while changing password:', error);
            setChangePasswordError('Có lỗi xảy ra khi thay đổi mật khẩu');
        }
    };

    const handleLogout = () => {
        const confirmLogout = window.confirm('Bạn có chắc chắn muốn đăng xuất không?');
        if (confirmLogout) {
            localStorage.clear();
            router.push('/Auth/login');
        }
    };

    return (
        <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
            {userData && (
                <>
                    <div className="rounded-t-lg h-32 overflow-hidden">
                        <img className="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain' />
                    </div>
                    <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                        <img className="object-cover object-center h-32" src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Woman looking front' />
                    </div>
                    <div className="text-center mt-2">
                        <h2 className="font-semibold">{userData.username}</h2>
                        <p className="text-gray-500">{userData.email}</p>
                    </div>
                    <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
                    </ul>
                </>
            )}
            {showChangePasswordModal && (
                <div className="bg-white rounded-lg p-2 w-96">
                    <h2 className="text-xl font-semibold mb-4">Thay Đổi Mật Khẩu</h2>
                    <input type="password" placeholder="Mật khẩu hiện tại" className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
                    <input type="password" placeholder="Mật khẩu mới" className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                    <input type="password" placeholder="Xác nhận mật khẩu mới" className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    {changePasswordError && <p className="text-red-500 mb-4">{changePasswordError}</p>}
                    <div className="flex justify-end">
                        <button onClick={handleChangePassword} className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 mr-2">Lưu</button>
                        <button onClick={() => setShowChangePasswordModal(false)} className="bg-gray-300 text-gray-700 font-semibold px-4 py-2 rounded-md hover:bg-gray-400">Hủy</button>
                    </div>
                </div>
            )}
            {!showChangePasswordModal && (
                <div className="mx-2 mt-2">
                    <button onClick={() => setShowChangePasswordModal(true)} className="w-1/2 block mx-auto rounded-full bg-gray-500 hover:shadow-lg font-semibold text-white px-6 py-2">Đổi mật khẩu</button>
                </div>
            )}
            <div className="p-2 mx-8 mt-2">
                <button onClick={handleLogout} className="w-1/2 block mx-auto rounded-full bg-blue-500 hover:shadow-lg font-semibold text-white px-6 py-2">Đăng xuất</button>
            </div>
        </div>
    );
};

export default Profile;
