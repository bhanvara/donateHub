import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-gray-900 h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 py-4">
        <div className="max-w-2xl mx-auto text-center py-16">
          <h2 className="text-2xl font-bold text-white mb-8">
            Your platform for crowdfunding and fundraising.
          </h2>
          <h1 className="text-5xl font-bold text-white sm:text-6xl">
            Decentralized for a better tomorrow
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-300">
            DonateHub is a platform dedicated to making the world a better
            place. We provide a space for individuals, charities, and
            organizations to connect and raise funds for important causes. Our
            mission is to empower everyone to make a positive impact and
            support the change they want to see in the world.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              to="/donate"
              className="inline-block bg-indigo-500 px-5 py-3 rounded-lg text-sm font-semibold text-white shadow-lg hover:bg-indigo-400 transition-colors duration-200"
            >
              Get started
            </Link>
            <Link to="/" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors duration-200">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}