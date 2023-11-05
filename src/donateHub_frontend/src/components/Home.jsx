import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <section
                className="bg-cover bg-center h-screen flex items-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507427100689-2bf8574e32d4')" }}
            >
                <div className="flex items-center hero-text h-screen w-full">
                    <div className="container mx-auto text-center">
                        <h1 className="text-5xl font-extrabold text-white mb-4">Welcome to DonateHub</h1>
                        <p className="text-lg text-white mb-8">Your platform for crowdfunding and fundraising.</p>
                        <a href="#featured-compaigns"
                            className="btn btn-primary py-3 px-6 text-lg font-semibold text-white rounded-full bg-green-600 hover:bg-green-700 hover:text-white transition duration-300 transform hover:scale-105">Get
                            Started
                        </a>

                        
                    </div>
                </div>
            </section>
            <section id="featured-compaigns" className="py-12 bg-gray-100">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-8">Featured Campaigns</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {/* <!-- Campaign Card 1 --> */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                            <img src="https://images.unsplash.com/photo-1542810634-71277d95dcbb" alt="Campaign 1" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800">Help for Children's Education</h3>
                                <p className="text-sm text-gray-600 mb-2">Fundraising to support education for underprivileged children.</p>
                                <p className="text-sm text-gray-600 mb-4">Amount Raised: ₹5.00 Lakhs of ₹10.00 Lakhs</p>
                                <Link
                                    to={{
                                        pathname: "/donate",
                                        state: { causeID: "1" }
                                    }}
                                    className="btn btn-primary py-2 px-4 text-sm font-semibold text-white rounded-full bg-green-800 hover:bg-green-700 hover:text-white transition duration-300 transform hover:scale-105"
                                >
                                    Donate
                                </Link>
                            </div>
                        </div>

                        {/* <!-- Campaign Card 2 --> */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                            <img src="https://images.unsplash.com/photo-1546531130-0f36255d9d49" alt="Campaign 2" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800">Clean Water for Villages</h3>
                                <p className="text-sm text-gray-600 mb-2">Support our mission to provide clean water to remote villages.</p>
                                <p className="text-sm text-gray-600 mb-4">Amount Raised: ₹7.50 Lakhs of ₹12.00 Lakhs</p>
                                <Link
                                    to={{
                                        pathname: "/donate",
                                        state: { causeID: "2" }
                                    }}
                                    className="btn btn-primary py-2 px-4 text-sm font-semibold text-white rounded-full bg-green-800 hover:bg-green-700 hover:text-white transition duration-300 transform hover:scale-105"
                                >
                                    Donate
                                </Link>
                            </div>
                        </div>

                        {/* <!-- Campaign Card 3 --> */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                            <img src="https://img.freepik.com/free-photo/medium-shot-woman-working-laptop_23-2150287700.jpg?" alt="Campaign 3" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800">Empowering Women in Tech</h3>
                                <p className="text-sm text-gray-600 mb-2">Help women pursue careers in technology and innovation.</p>
                                <p className="text-sm text-gray-600 mb-4">Amount Raised: ₹4.20 Lakhs of ₹8.00 Lakhs</p>
                                <Link
                                    to={{
                                        pathname: "/donate",
                                        state: { causeID: "3" }
                                    }}
                                    className="btn btn-primary py-2 px-4 text-sm font-semibold text-white rounded-full bg-green-800 hover:bg-green-700 hover:text-white transition duration-300 transform hover:scale-105"
                                >
                                    Donate
                                </Link>
                            </div>
                        </div>

                        {/* <!-- Campaign Card 4 --> */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                            <img src="https://images.unsplash.com/photo-1602410141957-ee70b4739066" alt="Campaign 4" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800">Nature Conservation Project</h3>
                                <p className="text-sm text-gray-600 mb-2">Support a good cause to protect our environment and wildlife.</p>
                                <p className="text-sm text-gray-600 mb-4">Amount Raised: ₹6.80 Lakhs of ₹15.00 Lakhs</p>
                                <Link
                                    to={{
                                        pathname: "/donate",
                                        state: { causeID: "4" }
                                    }}
                                    className="btn btn-primary py-2 px-4 text-sm font-semibold text-white rounded-full bg-green-800 hover:bg-green-700 hover:text-white transition duration-300 transform hover:scale-105"
                                >
                                    Donate
                                </Link>
                            </div>
                        </div>

                        {/* <!-- Campaign Card 5 --> */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                            <img src="https://images.unsplash.com/photo-1507427100689-2bf8574e32d4" alt="Campaign 5" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800">Food for the Needy</h3>
                                <p className="text-sm text-gray-600 mb-2">Make a difference today by providing food to the less fortunate.</p>
                                <p className="text-sm text-gray-600 mb-4">Amount Raised: ₹3.60 Lakhs of ₹6.00 Lakhs</p>
                                <Link
                                    to={{
                                        pathname: "/donate",
                                        state: { causeID: "5" }
                                    }}
                                    className="btn btn-primary py-2 px-4 text-sm font-semibold text-white rounded-full bg-green-800 hover:bg-green-700 hover:text-white transition duration-300 transform hover:scale-105"
                                >
                                    Donate
                                </Link>
                            </div>
                        </div>

                        {/* <!-- Campaign Card 6 --> */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                            <img src="https://images.unsplash.com/photo-1508791290064-c27cc1ef7a9a" alt="Campaign 6" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800">Renewable Energy Initiatives</h3>
                                <p className="text-sm text-gray-600 mb-2">Support our initiatives to promote renewable energy sources.</p>
                                <p className="text-sm text-gray-600 mb-4">Amount Raised: ₹9.50 Lakhs of ₹10.00 Lakhs</p>
                                <Link
                                    to={{
                                        pathname: "/donate",
                                        state: { causeID: "6" }
                                    }}
                                    className="btn btn-primary py-2 px-4 text-sm font-semibold text-white rounded-full bg-green-800 hover:bg-green-700 hover:text-white transition duration-300 transform hover:scale-105"
                                >
                                    Donate
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}