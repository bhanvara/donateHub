import React, { useEffect, useState } from "react";
import { CardComponent } from "./CardComponent";

export default function Home() {

    return (
        <div>
            <section
                className="bg-cover bg-center h-screen flex items-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507427100689-2bf8574e32d4')" }}
            >
                <div className="flex items-center hero-text h-screen w-full">
                    <div className="container mx-auto text-center">
                        <h1 className="text-5xl font-extrabold text-white mb-4">Welcome to DonateHub</h1>
                        <p className="text-lg text-white mb-8">Your platform for crowdfunding and fundraising.</p>
                        <a href="#featured-compaigns"
                            className="btn btn-primary py-3 px-6 text-lg font-semibold text-white rounded-full bg-green-600 hover:bg-green-700 hover:text-white transition duration-300 transform hover:scale-105">Get
                            Started
                        </a>
                    </div>
                </div>
            </section>
            <section id="featured-compaigns" className="py-12 bg-gray-900">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-semibold text-white mb-8">Featured Campaigns</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {/* <!-- Campaign Card 1 --> */}
                        
                        <CardComponent id="0" image="https://images.unsplash.com/photo-1542810634-71277d95dcbb" title="Help for Children's Education" description="Fundraising to support education for underprivileged children."/>

                        {/* <!-- Campaign Card 2 --> */}

                        <CardComponent id="1" image="https://plus.unsplash.com/premium_photo-1661673839379-af15f57c1ab3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHdhdGVyJTIwc3VwcGx5fGVufDB8fDB8fHww" title="Clean Water for Villages" description="Support our mission to provide clean water to remote villages."/>

                        {/* <!-- Campaign Card 3 --> */}

                        <CardComponent id="2" image="https://img.freepik.com/free-photo/medium-shot-woman-working-laptop_23-2150287700.jpg" title="Empowering Women in Tech" description="Help women pursue careers in technology and innovation."/>

                        {/* <!-- Campaign Card 4 --> */}
                        
                        <CardComponent id="3" image="https://images.unsplash.com/photo-1602410141957-ee70b4739066" title="Nature Conservation Project" description="Support a good cause to protect our environment and wildlife."/>

                        {/* <!-- Campaign Card 5 --> */}
                        
                        <CardComponent id="4" image="https://images.unsplash.com/photo-1582307811683-75b18a39ab71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Food for the Needy" description="Make a difference today by providing food to the less fortunate."/>

                        {/* <!-- Campaign Card 6 --> */}
                        
                        <CardComponent id="5" image="https://images.unsplash.com/photo-1508791290064-c27cc1ef7a9a" title="Renewable Energy Initiatives" description="Support our initiatives to promote renewable energy sources."/>
                    </div>
                </div>
            </section>
        </div>
    );
}