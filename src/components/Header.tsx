"use client";
import Link from "next/link";
import { useState } from "react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b flex items-center justify-between backdrop-blur-md p-4 md:p-6 shadow-slate-500 transition-all duration-300">
            {/* Logo */}
            <div>
                <Link href={"/"}><h2 className="text-3xl font-bold text-blue-600">ShareSphere</h2></Link>
            </div>

            {/* Hamburger Icon */}
            <div className="md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-lg backdrop-blur-md  focus:outline-none text-blue-600 hover:text-blue-800 transition duration-200"
                    aria-label="Toggle Navigation"
                >
                    {isOpen ? '✖️' : '☰'}
                </button>
            </div>

            {/* Links */}
            <nav className={`${isOpen ? "block" : "hidden"} md:flex md:items-center md:justify-between p-4 md:p-0 absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent backdrop-blur-md`}>
                <ul className="flex flex-col md:flex-row items-center justify-between w-full gap-y-4 md:gap-y-0 md:gap-x-8">
                    <li>
                        <Link href={"/"} className="text-lg text-gray-700 hover:text-blue-600 transition duration-200">Home</Link>
                    </li>
                    <li>
                        <Link href={"/about"} className="text-lg text-gray-700 hover:text-blue-600 transition duration-200">About</Link>
                    </li>
                    <li>
                        <Link href={"/features"} className="text-lg text-gray-700 hover:text-blue-600 transition duration-200">Features</Link>
                    </li>
                    <li>
                        <Link href={"/how-it-works"} className="text-lg text-gray-700 hover:text-blue-600 transition duration-200">How it Works</Link>
                    </li>
                    <li>
                        <Link href={"/privacy"} className="text-lg text-gray-700 hover:text-blue-600 transition duration-200">Privacy</Link>
                    </li>
                    <li>
                        <button className='text-lg px-4 py-1 rounded-xl border border-blue-500 hover:border-white hover:bg-blue-500 hover:text-white active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out'>Log in</button>
                    </li>
                    <li>
                        <button className='text-lg px-4 py-1 rounded-xl border border-blue-500 hover:border-white hover:bg-blue-500 hover:text-white active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out'>Download App</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;