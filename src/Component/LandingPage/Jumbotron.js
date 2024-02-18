import React from 'react'

const Jumbotron = () => {
    return (
        <section id='home' className="h-screen bg-center bg-no-repeat bg-cover bg-[url('Component/LandingPage/Image/home1.jpg')] bg-gray-700 bg-blend-multiply lg:block hidden">
            <div className="py-4 mx-auto max-w-screen-xl text-center lg:py-16">
                <div className='mt-44 p-10'>
                    <h1 className="mb-4 text-4xl text-white font-extrabold md:text-5xl lg:text-6xl">
                        Welcome to JobHub
                    </h1>
                    <p className="mb-8 text-lg text-white font-normal lg:text-xl sm:px-6 lg:px-48">
                        Explore which careers have the highest job satisfaction, best salaries, and more
                    </p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <a href="#job_list" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-white rounded-lg bg-blue-300 hover:bg-blue-400 focus:ring-4 focus:ring-blue-300">
                            Get started
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                        <a href="/dashboard/manage" className="inline-flex justify-center text-white hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center rounded-lg border-blue-400 border-2 hover:bg-blue-300 hover:text-white focus:ring-4 focus:ring-gray-400">
                            Dashboard
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Jumbotron
