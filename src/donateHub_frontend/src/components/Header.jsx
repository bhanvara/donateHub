import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-gray-800 text-white py-4">
            <nav className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-4xl font-bold text-white hover:text-gray-200">DonateHub</Link>
                <ul className="flex space-x-4">
                    <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
                    <li><Link to="/Donate" className="text-gray-300 hover:text-white">Donate</Link></li>
                    <li><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li>
                    <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}