import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Card = () => {
    const [data, setData] = useState(null);
    const [titleSearchTerm, setTitleSearchTerm] = useState("");
    const [companyNameSearchTerm, setCompanyNameSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(null);

    useEffect(() => {
        axios.get("https://dev-example.sanbercloud.com/api/job-vacancy")
            .then((res) => {
                setData([...res.data.data]);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleTitleSearchChange = (event) => {
        setTitleSearchTerm(event.target.value);
    };

    const handleCompanyNameSearchChange = (event) => {
        setCompanyNameSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const filtered = data.filter((res) => {
            return res.title.toLowerCase().includes(titleSearchTerm.toLowerCase()) && res.company_name.toLowerCase().includes(companyNameSearchTerm.toLowerCase());
        });
        setFilteredData(filtered);
    };

    const handleReset = () => {
        setTitleSearchTerm("");
        setCompanyNameSearchTerm("");
        setFilteredData(null);
    };

    return (
        <>
            <div className='mx-auto my-20 lg:block hidden'>
                <h1 className="mb-20 pl-10 text-4xl font-extrabold md:text-5xl lg:text-6xl">
                    Find a career you'll love
                </h1>
                <hr className='border-2 mx-20' />
                <p className='text-lg mt-20 pr-10 font-normal lg:text-xl pl-40 text-right'>
                    <span className='font-bold'>JobHub</span> adalah platform online yang menyediakan layanan pencarian dan pemasangan lowongan pekerjaan untuk para pencari kerja dan perusahaan.
                    Kami menyediakan akses mudah dan cepat ke ribuan peluang kerja dari berbagai industri dan tingkat pengalaman.
                </p>
            </div>
            <div id='job_list'>
                <div className='bg-blue-200 py-10 flex flex-col justify-center items-center'>
                    <h1 className="text-xl font-bold mb-5">Find your ideal job!</h1>
                    <form className="lg:w-full max-w-lg w-1/2" onSubmit={handleSubmit}>
                        <label htmlFor="title-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search by Title</label>
                        <div className="relative mb-4">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="title-search" className="block w-full p-4 ps-10 text-sm border-2 border-black rounded-lg bg-blue-200 focus:ring-blue-500 focus:border-blue-500" placeholder="Search by Title" value={titleSearchTerm} onChange={handleTitleSearchChange} />
                        </div>
                        <label htmlFor="company-name-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search by Company Name</label>
                        <div className="relative mb-4">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="company-name-search" className="block w-full p-4 ps-10 text-sm border-2 border-black rounded-lg bg-blue-200 focus:ring-blue-500 focus:border-blue-500" placeholder="Search by Company Name" value={companyNameSearchTerm} onChange={handleCompanyNameSearchChange} />
                        </div>
                        <div className="flex">
                            <button type="submit" className="border-2 border-black hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mr-2">Search</button>
                            <button type="button" className="border-2 border-black hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2" onClick={handleReset}>Reset</button>
                        </div>
                    </form>
                </div>
                <div className="container mx-auto my-20 mb-40 px-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
                        {(filteredData || data) && (filteredData || data).map((res) => (
                            <div key={res.id} className="bg-white border border-gray-200 rounded-lg shadow">
                                <img className="h-64 w-full object-cover rounded-t-lg" src={res.company_image_url} alt="job" />
                                <div className="bg-blue-200 px-5 py-3">
                                    <h5 className="text-xl font-semibold text-gray-900 h-16 overflow-hidden overflow-ellipsis">{res.title}</h5>
                                    <h5 className="text-gray-900 h-8 overflow-hidden overflow-ellipsis">{res.company_name}</h5>
                                    <div className="flex justify-center mt-3">
                                        <Link to={`/about/${res.id}`} className="hover:bg-blue-400 border-2 border-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
                                            Job Detail
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;