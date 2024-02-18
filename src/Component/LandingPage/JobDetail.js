import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const JobDetail = () => {
    // Mendapatkan id dari parameter URL menggunakan useParams()
    const { id } = useParams();
    // State untuk menyimpan detail pekerjaan
    const [job, setJob] = useState(null);

    // Fungsi untuk memformat jumlah uang dalam format mata uang rupiah
    const formatter = (amount) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(amount);
    };

    // Effect untuk melakukan fetch data pekerjaan berdasarkan id
    useEffect(() => {
        axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`)
            .then((res) => {
                setJob(res.data);
            })
            .catch((error) => {
                console.error('Error fetching job details:', error);
            });
    }, [id]);

    const handleStatus = (job_status) => {
        if (job_status === 0) {
            return <span className='text-red-500 text-bold'>Closed</span>;
        } else if (job_status === 1) {
            return <span className='text-blue-500 text-bold'>Open</span>;
        }
    };

    // Menampilkan pesan loading jika data pekerjaan belum tersedia
    if (!job) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto my-32">
            <div className="mx-5 lg:mx-20 lg:p-20 bg-white border border-gray-200 shadow">
                <div className="flex justify-center">
                    <img
                        className="p-8 rounded-t-lg object-cover object-center max-w-96 max-h-72"
                        src={job.company_image_url}
                        alt="job"
                    />
                </div>
                <div className="px-5 pb-5">
                    <h5 className="text-3xl font-semibold">
                        {job.title}
                    </h5>
                    <h5 className="text-xl">
                        {job.company_name}
                    </h5><br />
                    <h5 className="text-lg">
                        Location : <span className='text-blue-400 text-bold'>{job.company_city}</span>
                    </h5>
                    <h5 className="text-lg">
                        Job Tenure : <span className='text-blue-400 text-bold'>{job.job_tenure}</span>
                    </h5>
                    <h5 className="text-lg">
                        Job Type : <span className='text-blue-400 text-bold'>{job.job_type}</span>
                    </h5>
                    <h5 className="text-lg ">
                        Salary : <span className='text-blue-400 text-bold'>{formatter(job.salary_min)} - {formatter(job.salary_max)}</span>
                    </h5>
                    <h5 className="text-lg ">
                        Status : {handleStatus(job.job_status)}
                    </h5><br />
                    <h1 className="text-lg mt-4">Deskription :</h1>
                    <p className="text-lg tracking-tight text-gray-900 mt-2">
                        {job.job_description}
                    </p>
                    <h1 className="text-lg mt-4">Requirement :</h1>
                    <p className="text-lg tracking-tight text-gray-900 mt-2">
                        {job.job_qualification}
                    </p>
                    <button
                        className="mt-10 text-white bg-blue-300 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                        <a
                            href="/#home"
                            aria-current="page"
                        >
                            Apply
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobDetail;