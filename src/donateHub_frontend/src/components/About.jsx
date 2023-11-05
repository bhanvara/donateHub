import React from "react";

export default function About() {
    return (
        <div>
            <div>
                <section className="bg-gray-100 py-12 h-screen">
                    <div className="container mx-auto p-6 about-section">
                        <h1 className="text-4xl font-extrabold mb-4">About DonateHub</h1>
                        <p className="text-lg mb-6">
                            DonateHub is a platform dedicated to making the world a better place. We provide a space for individuals,
                            charities, and organizations to connect and raise funds for important causes. Our mission is to empower
                            everyone to make a positive impact and support the change they want to see in the world.
                        </p>
                        <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
                        <ul className="list-disc ml-6 text-lg mb-6">
                            <li>Empowerment: We believe in empowering individuals and organizations to create positive change.</li>
                            <li>Transparency: We divtain transparency in fundraising efforts to build trust with our users.</li>
                            <li>Impact: We measure our success by the positive impact we help create in the world.</li>
                        </ul>
                        <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
                        <p className="text-lg mb-6">
                            At DonateHub, we have a dedicated team of professionals committed to making a difference. Our diverse team
                            brings a wealth of experience and knowledge to ensure that every donation counts.
                        </p>
                        <h2 className="text-2xl font-semibold mb-2">Join Us</h2>
                        <p className="text-lg mb-6">
                            We welcome everyone who shares our vision to join us in this journey. Whether you are an individual, charity,
                            or organization, you can make a significant impact with DonateHub. Together, we can create a better world.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}