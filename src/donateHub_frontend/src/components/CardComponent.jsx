import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { donateHub_backend } from "../../../declarations/donateHub_backend";

export const CardComponent = ({ id, image, title, description }) => {
    const [donation, setDonation] = useState({});

    useEffect(() => {
        fetchData(id);
    }, []);

    // useEffect(() => {
    //     console.log(donation);
    //     console.log(donation[0]?.raisedAmount);
    //     console.log(donation[0]?.goalAmount);
    // }, [donation]);

    async function fetchData(id) {
        const causeID = Number(id);
        const donationData = await donateHub_backend.getDonationById(causeID);
        setDonation(donationData);
    }

    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src={image} alt="Campaign 1" className="w-full h-48 object-cover" />
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{description}</p>
                    {async () => {
                        console.log("callback function")
                    }}
                    <p className="text-sm text-gray-600 mb-4"> Amount Raised: ₹{(donation[0]?.raisedAmount/100000).toFixed(2)} Lakhs of ₹{(donation[0]?.goalAmount/100000).toFixed(2)} Lakhs </p>
                    <Link
                        to={{
                            pathname: "/donate",
                            search: "?cause=" + (Number(id)+1),
                        }}
                        className="btn btn-primary py-2 px-4 text-sm font-semibold text-white rounded-full bg-green-800 hover:bg-green-700 hover:text-white transition duration-300 transform hover:scale-105"
                    >
                        Donate
                    </Link>
                </div>
            </div>
        </div>
    );
};