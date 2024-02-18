import React from "react";

function NotFound() {
    return (
        <div className="container border-2 lg:my-40 mx-auto max-w-screen-md rounded-md">
            <div className="p-10 max-h-96 flex flex-col items-center justify-center h-screen">
                <h1 className="text-4xl font-bold text-blue-300 mb-4">404 - Halaman tidak ditemukan</h1>
                <p className="text-lg text-gray-700 mb-8">Maaf, halaman yang Anda cari tidak ada.</p>
                <a href="/#home" className="mt-4 text-blue-300 hover:underline">Kembali ke Halaman Utama</a>
            </div>
        </div>
    );
}

export default NotFound;