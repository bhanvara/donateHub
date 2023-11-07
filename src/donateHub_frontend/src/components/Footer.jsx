import React from "react";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-gray-900 text-white text-center py-5 h-full">
            <div className="container mx-auto">
                <p>&copy; {year} DonateHub. All rights reserved.</p>
            </div>
        </footer>
    );
}