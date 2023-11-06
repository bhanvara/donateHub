import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function MyForm() {
  const [state, handleSubmit] = useForm("mzblekzq");
  if (state.succeeded) {
    return (
      <p>Thanks for reaching out to us! We will get back to you shortly.</p>
    );
  }

  return (
    <section className="text-gray-400 body-font relative pt-12 bg-gray-900" id="contacts">
      <h1 className="text-5xl text-center text-white">Get in Touch</h1>
      <div className="container px-5 py-5 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Administrative Building, IIT Bhubaneswar, Jatni&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            style={{ contrast: "1.2", opacity: "0.56" }}
          ></iframe>
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Indian Institute of Technology Bhubaneswar Argul, Khordha PIN -
                752050, ODISHA
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a
                href="mailto:secyfebs.sg@iitbbs.ac.in"
                className="text-indigo-400 leading-relaxed"
              >
                contact@donateHub.com
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white text-lg mb-1 font-medium title-font">
            Connect with Us
          </h2>
          <div>
            <p className="leading-relaxed mb-5">
              Got a question? We&apos;d love to hear from you. Send us a message
              and we&apos;ll respond as soon as possible.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-400"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
