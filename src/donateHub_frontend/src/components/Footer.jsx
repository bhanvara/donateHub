import React from "react";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-gray-800 text-white text-center py-4">
            <div className="container mx-auto">
                <p>&copy; {year} DonateHub. All rights reserved.</p>
            </div>
        </footer>
    );
}