import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const Navbar = () => {
    let navigate = useNavigate()

    return (
        <nav className="bg-blue-200 border-gray-200 fixed top-0 left-0 w-full z-10">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a
                    href="/#home"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="h-8"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">
                        JobHub
                    </span>
                </a>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="bg-blue-200 font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <li>
                            <a
                                href="/#home"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 hover:underline md:p-0"
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#job_list"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 hover:underline md:p-0"
                            >
                                Vacancy
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#contact"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 hover:underline md:p-0"
                            >
                                Contact
                            </a>
                        </li>
                        <li>
                            {!Cookies.get('token') &&
                                <Link to={"/login"}>
                                    <button type="button" class="py-2 px-5 me-2 mb-2 border-black border-2 text-sm font-medium text-gray-900 focus:outline-none bg-blue-200 rounded-lg hover:bg-blue-400 focus:z-10 focus:ring-4 focus:ring-gray-200">
                                        Login
                                    </button>
                                </Link>

                            }
                            {Cookies.get('token') &&
                                <Link to={"/login"}>
                                    <button type="button" class="py-2 px-5 me-2 mb-2 border-black border-2 text-sm font-medium text-gray-900 focus:outline-none bg-blue-200 rounded-lg hover:bg-blue-400 focus:z-10 focus:ring-4 focus:ring-gray-200" onClick={() => {
                                        Cookies.remove('token')
                                        navigate('/#home')
                                    }}>
                                        Logout
                                    </button>
                                </Link>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar