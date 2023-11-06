import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { donateHub_backend } from "../../../declarations/donateHub_backend";

export default function Donate() {
    const location = useLocation();
    console.log(location);
    const searchParams = new URLSearchParams(location.search);
    console.log(searchParams);
    const causeId_default=0;
    if(searchParams.length>0){
        causeId_default=searchParams.get("cause")-1;
    }
  
    var [selectedCause, setSelectedCause] = React.useState(causeId_default);
    var [donationAmount, setDonationAmount] = React.useState();

    const handleDonation = async (event) => {

        console.log(selectedCause);
        console.log(donationAmount);
        event.preventDefault();
        const causeId = Number(selectedCause);
        const amount = parseFloat(donationAmount);
        // await donateHub_backend.topUpDonation(causeId, donationAmount);
    };

    return (
        <div>
            <section className="bg-gray-800 h-screen flex items-center">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-extrabold text-white mb-4">Make a Donation</h1>
                    <p className="text-lg text-white mb-8">Your contribution can make a difference.</p>
                    <div className="max-w-md mx-auto p-6 donation-form">
                        <form onSubmit={handleDonation}>
                            <div className="mb-4">
                                <label for="name" className="donation-label text-lg">Your Name</label>
                                <input type="text" id="name" name="name" className="donation-input" />
                            </div>
                            <div className="mb-4">
                                <label for="email" className="donation-label text-lg">Your Email</label>
                                <input type="email" id="email" name="email" className="donation-input" />
                            </div>
                            <div className="mb-4">
                                <label for="cause" className="donation-label text-lg">Cause</label>
                                <select id="cause" name="cause" className="donation-input text-center" value={selectedCause} onChange={(e) => setSelectedCause(e.target.value)}>
                                    <option value="0">Help for Children's Education</option>
                                    <option value="1">Clean Water for Villages</option>
                                    <option value="2">Empowering Women in Tech</option>
                                    <option value="3">Nature Conservation Project</option>
                                    <option value="4">Food for the Needy</option>
                                    <option value="5">Renewable Energy Initiatives</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label for="amount" className="donation-label text-lg">Donation Amount</label>
                                <input type="number" id="amount" name="amount" className="donation-input" value={donationAmount} onChange={(e) => setDonationAmount(e.target.value)} />
                            </div>
                            <button type="submit" className="btn-donate bg-green-800 hover:bg-green-700">Donate</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}