import React from "react";

export default function Header() {
    return (
        <header className="bg-gray-800 text-white py-4">
            <nav className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-4xl font-bold text-white hover:text-gray-200">DonateHub</a>
                <ul className="flex space-x-4">
                    <li><a href="./index.html" className="text-gray-300 hover:text-white">Home</a></li>
                    <li><a href="./about.html" className="text-gray-300 hover:text-white">About</a></li>
                    <li><a href="./contact.html" className="text-gray-300 hover:text-white">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}