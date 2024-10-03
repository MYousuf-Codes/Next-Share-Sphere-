import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h1 className="text-xl font-bold">Share Sphere</h1>
                    <Link href="https://www.linkedin.com/in/myousuf-codes/" target='blank'><p className="text-sm hover:text-blue-300">© 2024 Made with ❤ by Muhammad Yousuf.</p></Link>
                </div>
                <nav className="flex space-x-4">
                    <Link href="/" className="text-gray-400 hover:text-white">Home</Link>
                    <Link href="/about" className="text-gray-400 hover:text-white">About</Link>
                    <Link href="/features" className="text-gray-400 hover:text-white">Features</Link>
                    <Link href="/how-it-works" className="text-gray-400 hover:text-white">How it Works</Link>
                    <Link href="/privacy" className="text-gray-400 hover:text-white">Privacy</Link>
                </nav>
                <div className="flex space-x-4">
                    <Link href="#" className="text-gray-400 hover:text-white">Terms of Service</Link>
                    <Link href="#" className="text-gray-400 hover:text-white">Contact Us</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;