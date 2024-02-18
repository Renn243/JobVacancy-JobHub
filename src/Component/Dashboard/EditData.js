import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const EditData = () => {
    let navigate = useNavigate();

    // Mendapatkan parameter id dari URL menggunakan useParams
    const { id } = useParams();

    // State untuk menyimpan data dari API
    const [data, setData] = useState(null);

    // State untuk menyimpan nilai input form
    const [input, setInput] = useState({
        title: '',
        job_description: '',
        job_qualification: '',
        job_type: '',
        job_tenure: '',
        job_status: '',
        company_name: '',
        company_image_url: '',
        company_city: '',
        salary_min: '',
        salary_max: ''
    });

    // Mengambil data dari API berdasarkan id saat komponen dimount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`);
                setData(res.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    // Mengupdate nilai input form saat data sudah didapatkan dari API
    useEffect(() => {
        if (data) {
            setInput({
                title: data.title,
                job_description: data.job_description,
                job_qualification: data.job_qualification,
                job_type: data.job_type,
                job_tenure: data.job_tenure,
                job_status: data.job_status,
                company_name: data.company_name,
                company_image_url: data.company_image_url,
                company_city: data.company_city,
                salary_min: data.salary_min,
                salary_max: data.salary_max
            });
        }
    }, [data]);

    // Handler untuk mengirimkan data yang diubah ke API
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`, input,
            { headers: { "Authorization": "Bearer " + Cookies.get('token') } })
            .then(res => {
                alert("Data berhasil disimpan");
                navigate('/dashboard/manage');
            })
            .catch(error => {
                console.error('Error updating data:', error);
            });
    };

    // Handler untuk memperbarui nilai input saat pengguna memasukkan data ke form
    const handleInput = (event) => {
        const { name, value } = event.target;
        setInput(prevInput => ({
            ...prevInput,
            [name]: value
        }));
    };

    // Menampilkan pesan loading jika data belum didapatkan dari API
    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 rounded-lg mt-20">
                <span className='font-black text-blue-300 text-3xl'>Edit Data</span>
                <hr className='my-5 border-2 border-blue-300' />
                <form className="w-full mx-auto" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label
                            htmlFor="title"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required=""
                            onChange={handleInput}
                            value={input.title}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="job_description"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Description
                        </label>
                        <input
                            type="text"
                            name="job_description"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required=""
                            onChange={handleInput}
                            value={input.job_description}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="job_qualification"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Qualification
                        </label>
                        <input
                            type="text"
                            name="job_qualification"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required=""
                            onChange={handleInput}
                            value={input.job_qualification}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="job_type"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Type
                        </label>
                        <input
                            type="text"
                            name="job_type"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required=""
                            onChange={handleInput}
                            value={input.job_type}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="job_tenure"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Tenure
                        </label>
                        <input
                            type="text"
                            name="job_tenure"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required=""
                            onChange={handleInput}
                            value={input.job_tenure}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="job_status"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Status
                        </label>
                        <input
                            type="number"
                            name="job_status"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required=""
                            onChange={handleInput}
                            value={input.job_status}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="company_name"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Company Name
                        </label>
                        <input
                            type="text"
                            name="company_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required=""
                            onChange={handleInput}
                            value={input.company_name}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="company_image_url"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Company Image
                        </label>
                        <input
                            type="text"
                            name="company_image_url"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required=""
                            onChange={handleInput}
                            value={input.company_image_url}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="company_city"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Company City
                        </label>
                        <input
                            type="text"
                            name="company_city"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required=""
                            onChange={handleInput}
                            value={input.company_city}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="salary_min"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Salary Min
                        </label>
                        <input
                            type="number"
                            name="salary_min"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required=""
                            onChange={handleInput}
                            value={input.salary_min}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="salary_max"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Salary Max
                        </label>
                        <input
                            type="number"
                            name="salary_max"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required=""
                            onChange={handleInput}
                            value={input.salary_max}
                        />
                    </div>
                    <button
                        type={"submit"}
                        className="text-white bg-blue-300 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditData;