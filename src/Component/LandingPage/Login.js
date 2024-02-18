import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

const Login = () => {
    // Penggunaan useNavigate untuk navigasi di dalam fungsi
    let navigate = useNavigate();

    // State untuk menyimpan data input pengguna
    const [input, setInput] = useState({
        email: "",
        password: ""
    });

    // Fungsi untuk mengubah state input saat nilai input berubah
    const handleChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        setInput({ ...input, [name]: value });
    };

    // Fungsi untuk melakukan login
    const handleLogin = (event) => {
        event.preventDefault();

        let { email, password } = input;

        axios.post(`https://dev-example.sanbercloud.com/api/login`, { email, password })
            .then((res) => {
                let data = res.data;
                Cookies.set('token', data.token, { expires: 1 });
                navigate('/');
                alert("Berhasil login");
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <form class="container border-2 my-40 rounded-md p-20 max-w-lg mx-auto" onSubmit={handleLogin}>
            <h1 class='text-3xl font-black text-blue-300 mb-10 text-center'>Login</h1><br />

            <div class="mb-5">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
                <input type="email" name="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required="" onChange={handleChange} value={input.email} />
            </div>

            <div class="mb-5">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                <input type="password" name="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required="" onChange={handleChange} value={input.password} />
            </div>

            {/* 
    <div class="flex items-start mb-5">
        <div class="flex items-center h-5">
            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required="" />
        </div>
        <label for="remember" class="ms-2 text-sm font-medium text-gray-90">Remember me</label>
    </div>
    */}

            <button type="submit" class="text-white mb-5 bg-blue-300 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>

            <div>
                <span className='text-sm mr-2'>Don't have an account yet?</span><Link to="/register" class='text-blue-300 text-bold hover:underline'>Sign in</Link>
            </div>
        </form>
    )
}

export default Login