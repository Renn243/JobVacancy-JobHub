import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const NavDash = () => {
    let navigate = useNavigate()

    return (
        <>
            <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center justify-start rtl:justify-end">
                                <button
                                    data-drawer-target="logo-sidebar"
                                    data-drawer-toggle="logo-sidebar"
                                    aria-controls="logo-sidebar"
                                    type="button"
                                    className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                                >
                                    <span className="sr-only">Open sidebar</span>
                                    <svg
                                        className="w-6 h-6"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            clipRule="evenodd"
                                            fillRule="evenodd"
                                            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                                        />
                                    </svg>
                                </button>
                                <a href="/#home" className="flex ms-2 md:me-24">
                                    <img
                                        src="https://flowbite.com/docs/images/logo.svg"
                                        className="h-8 me-3"
                                        alt="FlowBite Logo"
                                    />
                                    <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">
                                        JobHub
                                    </span>
                                </a>
                            </div>
                            <div className="flex items-center hidden md:block">
                                <button type="button" className="py-2 px-5 me-2 mb-2 border-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-black hover:bg-blue-200 focus:z-10 focus:ring-4 focus:ring-gray-200" onClick={() => {
                                    Cookies.remove('token')
                                    navigate('/#home')
                                }}>
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <aside
                id="logo-sidebar"
                className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0"
                aria-label="Sidebar"
            >
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
                    <ul className="space-y-2 font-medium">
                        <lik>
                            <Link
                                to="/dashboard/manage"
                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-blue-200 group"
                            >
                                <span className="ms-3">Manage Data</span>
                            </Link>
                        </lik>
                        <li>
                            <Link
                                to="/dashboard/create"
                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-blue-200 group"
                            >
                                <span className="flex-1 ms-3 whitespace-nowrap">Create Data</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/dashboard/change-password"
                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-blue-200 group"
                            >
                                <span className="flex-1 ms-3 whitespace-nowrap">Change Password</span>
                            </Link>
                        </li>
                        <li>
                            <a
                                href="/#home"
                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-blue-200 group"
                            >
                                <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default NavDash