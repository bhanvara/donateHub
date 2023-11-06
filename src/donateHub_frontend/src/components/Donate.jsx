import React, { useEffect, useState } from "react";
import Modal from 'react-modal';
import { useLocation } from "react-router-dom";
import { donateHub_backend } from "../../../declarations/donateHub_backend";

Modal.setAppElement('#root'); // Set the root element for accessibility

export default function Donate() {
    const location = useLocation();
    console.log(location);
    const searchParams = new URLSearchParams(location.search);
    console.log(searchParams);
    const causeIdDefault = 0;
    if (searchParams.length > 0) {
        causeIdDefault = searchParams.get("cause") - 1;
    }

    const [selectedCause, setSelectedCause] = React.useState(causeIdDefault);
    const [donationAmount, setDonationAmount] = React.useState();
    const [donatedAmount, setDonatedAmount] = React.useState();
    const [raisedAmount, setRaisedAmount] = useState(0);
    const [goalAmount, setGoalAmount] = useState(0);
    const [processingDonation, setProcessingDonation] = useState(false);
    const [confirmation, setConfirmation] = useState(false);

    const handleDonation = async (event) => {
        event.preventDefault();
        const causeId = Number(selectedCause);
        const amount = parseFloat(donationAmount);
        setDonatedAmount(donationAmount);
        setProcessingDonation(true);

        try {
            await donateHub_backend.topUpDonation(causeId, amount);
            const donation = await donateHub_backend.getDonationById(causeId);
            setRaisedAmount(donation[0]?.raisedAmount);
            setGoalAmount(donation[0]?.goalAmount);
            setConfirmation(true);
        } catch (error) {
            alert("Donation failed!");
        }

        setProcessingDonation(false);
        setDonationAmount('');
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
                                <label htmlFor="name" className="donation-label text-lg">Your Name</label>
                                <input type="text" id="name" name="name" className="donation-input" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="donation-label text-lg">Your Email</label>
                                <input type="email" id="email" name="email" className="donation-input" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="cause" className="donation-label text-lg">Cause</label>
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
                                <label htmlFor="amount" className="donation-label text-lg">Donation Amount</label>
                                <input type="number" step="0.01" id="amount" name="amount" className="donation-input" value={donationAmount} onChange={(e) => { setDonationAmount(e.target.value); setConfirmation(false); }} />
                            </div>
                            <button type="submit" className="btn-donate bg-green-800 hover:bg-green-700" {...(processingDonation ? { disabled: true } : {})}>Donate</button>
                        </form>
                    </div>
                </div>
            </section>
            {/* <div>
                {processingDonation && <div>Processing Donation...</div>}
                {confirmation && <div>Donation successful! Donated ₹{donatedAmount} Total Amount Raised ₹{(raisedAmount / 100000).toFixed(2)} Lakhs of ₹{(goalAmount / 100000).toFixed(2)} Lakhs </div>}
            </div> */}
            <Modal
                isOpen={confirmation}
                onRequestClose={() => setConfirmation(false)}
                className="fixed inset-0 flex items-center justify-center z-50"
                overlayClassName="fixed inset-0 bg-opacity-70 bg-black"
            >
                <div className="bg-white p-6 rounded-lg w-64">
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold mb-4">Thank you for your donation!</h2>
                        <p className="text-lg mb-2">You have donated: ₹{donatedAmount}</p>
                        <p className="text-lg mb-2">The current raised amount is: ₹{(raisedAmount / 100000).toFixed(2)} Lakhs</p>
                        <button
                            onClick={() => setConfirmation(false)}
                            className="block mx-auto bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300 ease-in-out"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
