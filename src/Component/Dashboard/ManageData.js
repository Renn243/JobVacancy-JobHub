import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const ManageData = () => {
    const [data, setData] = useState(null);
    const [fetchStatus, setFetchStatus] = useState(true);

    useEffect(() => {
        if (fetchStatus === true) {
            // Mengambil data dari API saat komponen dimount atau fetchStatus berubah menjadi true
            axios.get("https://dev-example.sanbercloud.com/api/job-vacancy")
                .then((res) => {
                    setData([...res.data.data]);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
            setFetchStatus(false);
        }
    }, [fetchStatus, setFetchStatus]);

    const handleDelete = (event) => {
        // Mendapatkan ID data yang akan dihapus dari tombol yang diklik
        let ID_JOB = parseInt(event.target.value);

        // Konfirmasi penghapusan
        const isConfirmed = window.confirm("Apakah Anda yakin ingin menghapus data ini?");

        if (isConfirmed) {
            // Menghapus data jika konfirmasi diterima
            axios.delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${ID_JOB}`, {
                headers: {
                    "Authorization": "Bearer " + Cookies.get('token')
                }
            })
                .then((res) => {
                    console.log("Data Berhasil Dihapus");
                    setFetchStatus(true); // Memperbarui status fetch untuk memperbarui tampilan data setelah penghapusan berhasil
                })
                .catch((error) => {
                    console.error('Error deleting data:', error);
                });
        } else {
            // Batal jika konfirmasi tidak diterima
            return;
        }
    };

    // Fungsi untuk membatasi panjang teks
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + "...";
        }
        return text;
    };
    return (
        <>
            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 rounded-lg mt-20">
                    <span className='font-black text-blue-300 text-3xl'>Manage Data</span>
                    <hr className='my-5 border-2 border-blue-300' />
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right">
                            <thead className="text-xs text-white uppercase bg-blue-300">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        No
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Title
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Description
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Qualification
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Type
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Tenure
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Company Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Company Image
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Company City
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Salary Min
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Salary Max
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data !== null && data.map((res, index) => {
                                    return (
                                        <tr key={res.id} className="odd:bg-white even:bg-gray-50 border-b">
                                            <th scope="col" className="px-6 py-3">
                                                {index + 1}
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                {res.title}
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                {truncateText(res.job_description, 20)}
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                {truncateText(res.job_qualification, 20)}
                                            </th>
                                            <th scope="col" className="px-6 py-3 overflow-y-hidden">
                                                {res.job_type}
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                {res.job_tenure}
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                {res.job_status}
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                {res.company_name}
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                <img src={res.company_image_url} height={100} width={100} alt='company' />
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                {res.company_city}
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                {res.salary_min}
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                {res.salary_max}
                                            </th>
                                            <td className="px-6 py-4">
                                                <Link to={`/dashboard/edit/${res.id}`}><button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Edit</button></Link>
                                                <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onClick={handleDelete} value={res.id}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManageData