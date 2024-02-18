import React, { useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

const CreateData = () => {
    // State untuk menyimpan status fetch dan data input
    const [fetchStatus, setFetchStatus] = useState(true)
    const [input, setInput] = useState(
        {
            title: "",
            job_description: "",
            job_qualification: "",
            job_type: "",
            job_tenure: "",
            job_status: 0,
            company_name: "",
            company_image_url: "",
            company_city: "",
            salary_min: 0,
            salary_max: 0
        }
    )

    // Handler untuk meng-update state input sesuai dengan nilai input pengguna
    const handleInput = (event) => {
        const { name, value } = event.target;

        // Menggunakan spread operator untuk mempertahankan nilai-nilai sebelumnya
        setInput({ ...input, [name]: value });
    }

    // Handler untuk mengirim data ke server
    const handleSubmit = (event) => {
        event.preventDefault()

        // Mendapatkan data input dari state
        const {
            title,
            job_description,
            job_qualification,
            job_type,
            job_tenure,
            job_status,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max
        } = input;

        // Mengirim data ke backend menggunakan axios
        axios.post('https://dev-example.sanbercloud.com/api/job-vacancy', {
            title,
            job_description,
            job_qualification,
            job_type,
            job_tenure,
            job_status,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max
        }, { headers: { "Authorization": "Bearer " + Cookies.get('token') } })
            .then((res) => {
                console.log(res)
                window.alert('Data berhasil ditambah');
                // Mengatur status fetch menjadi true
                setFetchStatus(true)
            })

        // Mengosongkan input setelah data terkirim
        setInput(
            {
                title: "",
                job_description: "",
                job_qualification: "",
                job_type: "",
                job_tenure: "",
                job_status: 0,
                company_name: "",
                company_image_url: "",
                company_city: "",
                salary_min: 0,
                salary_max: 0
            }
        )
    }

    return (
        <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 rounded-lg mt-20">
                <span className='font-black text-blue-300 text-3xl'>Create Data</span>
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
    )
}

export default CreateData