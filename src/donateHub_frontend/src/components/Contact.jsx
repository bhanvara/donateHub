import React from "react";

export default function Contact() {
    return (
        <div>
            <div>
                <section className="bg-gray-800 h-screen flex items-center">
                    <div className="container mx-auto text-center">
                        <h1 className="text-4xl font-extrabold text-white mb-4">Contact Us</h1>
                        <p className="text-lg text-white mb-8">We'd love to hear from you!</p>
                        <div className="max-w-lg mx-auto p-6 contact-form">
                            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                            <p className="text-sm"><strong>Email:</strong> contact@donatehub.com</p>
                            <p className="text-sm"><strong>Phone:</strong> +91 70079 13869</p>
                            <p className="text-sm"><strong>Address:</strong> IIT Bhubaneswar, Odisha</p>
                        </div>
                        <div className="max-w-lg mx-auto mt-8 p-6 contact-form">
                            <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
                            <form>
                                <div className="mb-4">
                                    <label for="name" className="block text-gray-600 text-sm font-medium">Your Name</label>
                                    <input type="text" id="name" name="name"
                                        className="w-full px-3 py-2 border border-gray-300 focus:ring-green-500 rounded-lg shadow-sm text-sm placeholder-gray-400 focus:outline-none focus:border-green-300" />
                                </div>
                                <div className="mb-4">
                                    <label for="email" className="block text-gray-600 text-sm font-medium">Your Email</label>
                                    <input type="email" id="email" name="email"
                                        className="w-full px-3 py-2 border border-gray-300 focus:ring-green-500 rounded-lg shadow-sm text-sm placeholder-gray-400 focus:outline-none focus:border-green-300" />
                                </div>
                                <div className="mb-4">
                                    <label for="message" className="block text-gray-600 text-sm font-medium">Message</label>
                                    <textarea id="message" name="message"
                                        className="w-full px-3 py-2 border border-gray-300 focus:ring-green-500 rounded-lg shadow-sm text-sm placeholder-gray-400 focus:outline-none focus:border-green-300"
                                        rows="4"></textarea>
                                </div>
                                <button type="submit"
                                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}