import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    // Penggunaan useNavigate untuk navigasi di dalam fungsi
    let navigate = useNavigate();

    // State untuk menyimpan data input pengguna
    const [input, setInput] = useState({
        name: "",
        image_url: "",
        email: "",
        password: ""
    });

    // Fungsi untuk mengubah state input saat nilai input berubah
    const handleChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        setInput({ ...input, [name]: value });
    };

    // Fungsi untuk melakukan registrasi pengguna
    const handleRegister = (event) => {
        event.preventDefault();

        let { name, image_url, email, password } = input;

        // Periksa apakah password memiliki minimal 8 karakter
        if (password.length < 8) {
            alert("Password harus memiliki minimal 8 karakter");
            return;
        }

        axios.post(`https://dev-example.sanbercloud.com/api/register`, {
            name: name,
            image_url: image_url,
            email: email,
            password: password
        })
            .then((res) => {
                navigate('/login');
                alert("Berhasil membuat akun. Silahkan login.");
            })
            .catch((error) => {
                // Tangani kesalahan
                alert("Gagal membuat akun: ");
            });
    };


    return (
        <form class="container border-2 my-40 rounded-md p-20 max-w-lg mx-auto" onSubmit={handleRegister}>
            <h1 class='text-3xl font-black text-blue-300 mb-10 text-center'>Register</h1><br />

            <div class="mb-5">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Username</label>
                <input type="text" name="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required="" onChange={handleChange} value={input.name} />
            </div>

            <div class="mb-5">
                <label for="image_url" class="block mb-2 text-sm font-medium text-gray-900">Image</label>
                <input type="text" name="image_url" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required="" onChange={handleChange} value={input.image_url} />
            </div>

            <div class="mb-5">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
                <input type="email" name="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required="" onChange={handleChange} value={input.email} />
            </div>

            <div class="mb-5">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                <input type="password" name="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required="" onChange={handleChange} value={input.password} />
            </div>

            <button type="submit" class="text-white bg-blue-300 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
        </form>
    )
}

export default Register