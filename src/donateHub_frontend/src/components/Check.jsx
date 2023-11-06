import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { donateHub_backend } from "../../../declarations/donateHub_backend";

export default function Check() {
    const [donations, setDonations] = useState({});
    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const ids = [0, 1, 2, 3, 4, 5];

        ids.forEach(async (id) => {
            const donation = await donateHub_backend.getDonationById(id);
            setDonations(prev => ({ ...prev, [id]: donation }));
            console.log(donation);
        });

        console.log(donations);
    }

    return (
        <div>
            hello
        </div>
    )
}