import React, { useEffect, useState } from "react";
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";

export default function Contact() {

    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    
        let missingFields = [];
        if (!name) missingFields.push("name");
        if (!email) missingFields.push("email");
        if (!message) missingFields.push("message");
    
        if (missingFields.length > 0) {
            alert(`Please enter all the details! Missing: ${missingFields.join(", ")}`);
        } else {
            setIsOpen(true);
            setName("");
            setEmail("");
            setMessage("");
        }
    };

    const handleClose = () => {
        setIsOpen(false);
        navigate("/");
    };

    return (
        <div>
            <div>
                <section className="bg-gray-900 h-screen flex items-center">
                    <div className="container mx-auto text-center">
                        <h1 className="text-4xl font-extrabold text-white mb-4">Contact Us</h1>
                        <p className="text-lg text-white mb-8">We'd love to hear from you!</p>
                        <div className="max-w-lg mx-auto p-6 contact-form">
                            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                            <p className="text-sm"><strong>Email:</strong> contact@donatehub.com</p>
                            <p className="text-sm"><strong>Address:</strong> IIT Bhubaneswar, Odisha</p>
                        </div>
                        <div className="max-w-lg mx-auto mt-8 p-6 contact-form">
                            <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label for="name" className="block text-gray-600 text-sm font-medium"><span style={{ color: 'red' }}>* </span>Your Name</label>
                                    <input type="text" id="name" name="name"
                                        className="w-full px-3 py-2 border border-gray-300 focus:ring-green-500 rounded-lg shadow-sm text-sm placeholder-gray-400 focus:outline-none focus:border-green-300" value={name} onChange={(e) => { setName(e.target.value); }} />
                                </div>
                                <div className="mb-4">
                                    <label for="email" className="block text-gray-600 text-sm font-medium"><span style={{ color: 'red' }}>* </span>Your Email</label>
                                    <input type="email" id="email" name="email"
                                        className="w-full px-3 py-2 border border-gray-300 focus:ring-green-500 rounded-lg shadow-sm text-sm placeholder-gray-400 focus:outline-none focus:border-green-300" value={email} onChange={(e) => { setEmail(e.target.value); }} />
                                </div>
                                <div className="mb-4">
                                    <label for="message" className="block text-gray-600 text-sm font-medium"><span style={{ color: 'red' }}>* </span>Message</label>
                                    <textarea id="message" name="message"
                                        className="w-full px-3 py-2 border border-gray-300 focus:ring-green-500 rounded-lg shadow-sm text-sm placeholder-gray-400 focus:outline-none focus:border-green-300"
                                        rows="4" value={message} onChange={(e) => { setMessage(e.target.value); }}></textarea>
                                </div>
                                <button type="submit"
                                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                    Send Message
                                </button>
                            </form>
                            <Modal
                                isOpen={isOpen}
                                onRequestClose={() => setIsOpen(false)}
                                className="fixed inset-0 flex items-center justify-center z-50"
                                overlayClassName="fixed inset-0 bg-opacity-70 bg-black"
                            >
                                <div className="bg-gray-200 p-6 rounded-lg w-64">
                                    <div className="text-center">
                                        <h2 className="text-2xl font-semibold mb-4">Thanks for reaching out to us! We will get back to you shortly.</h2>
                                        <button
                                            onClick={() => handleClose()}
                                            className="block mx-auto bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300 ease-in-out"
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </Modal>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}