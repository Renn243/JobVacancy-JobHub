import React, { useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

const ResetPassword = () => {
    const [input, setInput] = useState({
        current_password: "",
        new_password: "",
        new_confirm_password: ""
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInput(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { current_password, new_password, new_confirm_password } = input;

        if (new_password.length < 8 || new_confirm_password.length < 8) {
            setErrorMessage('Password harus memiliki minimal 8 karakter');
            return;
        }

        if (new_password !== new_confirm_password) {
            setErrorMessage('Kata sandi baru dan konfirmasi kata sandi baru harus cocok.');
            return;
        }

        try {
            const response = await axios.post(
                'https://dev-example.sanbercloud.com/api/change-password',
                {
                    current_password,
                    new_password,
                    new_confirm_password
                },
                {
                    headers: { "Authorization": "Bearer " + Cookies.get('token') }
                }
            );

            setSuccessMessage("Password berhasil di ganti");

            setInput(
                {
                    current_password: "",
                    new_password: "",
                    new_confirm_password: ""
                }
            )
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage('An error occurred while changing password.');
            }
        }
    };

    return (
        <div className="p-4 sm:ml-64">
            <div className="container border-2 my-20 rounded-md p-20 max-w-lg mx-auto">
                <h1 class='text-3xl font-black text-blue-300 mb-10 text-center'>Change Password</h1>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="mb-4">
                        <label htmlFor="current_password" className="block mb-2 text-sm font-medium text-gray-900">Current Password</label>
                        <input type="password" id="currentPassword" name="current_password" value={input.current_password} onChange={handleChange} className="border border-gray-300 rounded-lg p-2.5 w-full" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="new_password" className="block mb-2 text-sm font-medium text-gray-900">New Password</label>
                        <input type="password" id="new_password" name="new_password" value={input.new_password} onChange={handleChange} className="border border-gray-300 rounded-lg p-2.5 w-full" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="new_confirm_password" className="block mb-2 text-sm font-medium text-gray-900">Confirm New Password</label>
                        <input type="password" id="new_confirm_password" name="new_confirm_password" value={input.new_confirm_password} onChange={handleChange} className="border border-gray-300 rounded-lg p-2.5 w-full" required />
                    </div>
                    {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
                    {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
                    <button type="submit" className="bg-blue-300 hover:bg-blue-400 text-white font-medium rounded-lg py-2 px-6">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;