import React from "react";

export default function Donate() {
    return (
        <div>
            <section className="bg-gray-800 h-screen flex items-center">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-extrabold text-white mb-4">Make a Donation</h1>
                    <p className="text-lg text-white mb-8">Your contribution can make a difference.</p>
                    <div className="max-w-md mx-auto p-6 donation-form">
                        <form>
                            <div className="mb-4">
                                <label for="name" className="donation-label text-lg">Your Name</label>
                                <input type="text" id="name" name="name" className="donation-input" />
                            </div>
                            <div className="mb-4">
                                <label for="email" className="donation-label text-lg">Your Email</label>
                                <input type="email" id="email" name="email" className="donation-input" />
                            </div>
                            <div className="mb-4 ">
                                <label for="cause" className="donation-label text-lg">Select a Cause</label>
                                <select id="cause" name="cause" className="donation-input text-center">
                                    <option value="education">Help for Children's Education</option>
                                    <option value="water">Clean Water for Villages</option>
                                    <option value="tech">Empowering Women in Tech</option>
                                    <option value="nature">Nature Conservation Project</option>
                                    <option value="food">Food for the Needy</option>
                                    <option value="energy">Renewable Energy Initiatives</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label for="amount" className="donation-label text-lg">Donation Amount</label>
                                <input type="number" id="amount" name="amount" className="donation-input" />
                            </div>
                            <button type="submit" className="btn-donate bg-green-800 hover:bg-green-700">Donate</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}