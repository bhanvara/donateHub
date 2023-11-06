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

      <div className="bg-white rounded-lg shadow-lg p-8 md:m-5 m-2">
        <div className="relative overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src={image}
            alt="Campaign 1"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mt-4">{title}</h3>
        <p className="text-gray-500 text-sm mt-2">{description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-gray-900 font-bold text-lg">
            {" "}
            Raised: ₹{(donation[0]?.raisedAmount / 100000).toFixed(
              2
            )}{" "}
            Lakhs of ₹{(donation[0]?.goalAmount / 100000).toFixed(2)} Lakhs{" "}
          </span>
          <button className="bg-green-500 text-white py-2 px-4 rounded-full font-bold hover:bg-green-600">
            <Link
              to={{
                pathname: "/donate",
                search: "?cause=" + (Number(id) + 1),
              }}>
              Donate
            </Link>
          </button>
        </div>
      </div>
  );
};
