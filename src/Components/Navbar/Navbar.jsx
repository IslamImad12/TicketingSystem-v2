// import React, { useState } from 'react';
// import logo from '../../images/logo.png';
// import admin from '../../images/admin4.png';

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 px-4">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <a href="/" className="flex ms-2 md:me-24">
              <img src='../../../public/images/logo.png' className="h-8 me-3" alt="Your Logo" />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Your Ticket</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="/main" className="text-lg font-medium text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300">Home</a>
            <a href="/home" className="text-lg font-medium text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300">Dashbord</a>
            <a href="/profile"><img className="w-8 h-8 rounded-full" src='../../../public/images/admin4.png' alt="user photo" /></a>
          </div>
        </div>
      </div>
    </nav>
  );
}