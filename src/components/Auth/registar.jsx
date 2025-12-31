import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../pages/Layout/layout";


export default function Signup() {
    return (
        <>
            <Navbar />
            <section className="bg-white dark:bg-gray-900">
                <div className="flex justify-center min-h-screen">

                    {/* Left Image */}
                    <div
                        className="hidden bg-cover lg:block lg:w-2/5"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?auto=format&fit=crop&w=715&q=80')",
                        }}
                    />

                    {/* Right Content */}
                    <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                        <div className="w-full">
                            <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                                Get your free account now.
                            </h1>

                            <p className="mt-4 text-gray-500 dark:text-gray-400">
                                Let’s get you all set up so you can verify your personal account and
                                begin setting up your profile.
                            </p>

                            {/* Account Type */}
                            <div className="mt-6">
                                <h1 className="text-gray-500 dark:text-gray-300">
                                    Select type of account
                                </h1>

                                <div className="mt-3 md:flex md:items-center md:-mx-2">
                                    <Link
                                        to="/signup/client"
                                        className="flex justify-center w-full px-6 py-3 text-white bg-blue-500 rounded-lg md:w-auto md:mx-2"
                                    >
                                        <span className="mx-2">Client</span>
                                    </Link>

                                    <Link
                                        to="/signup/worker"
                                        className="flex justify-center w-full px-6 py-3 mt-4 text-blue-500 border border-blue-500 rounded-lg md:mt-0 md:w-auto md:mx-2"
                                    >
                                        <span className="mx-2">Worker</span>
                                    </Link>
                                </div>
                            </div>

                            {/* Form */}
                            <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                                <Input label="First Name" placeholder="John" />
                                <Input label="Last Name" placeholder="Snow" />
                                <Input label="Phone number" placeholder="XXX-XX-XXXX" />
                                <Input label="Email address" placeholder="john@example.com" />
                                <Input label="Password" type="password" />
                                <Input label="Confirm password" type="password" />

                                <button className="flex items-center justify-between w-full px-6 py-3 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-400">
                                    <span>Sign Up</span>
                                    <span>→</span>
                                </button>
                            </form>

                            {/* Login link */}
                            <p className="mt-6 text-sm text-center text-gray-500">
                                Already have an account?{" "}
                                <Link to="/login" className="text-blue-500 hover:underline">
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

/* Reusable Input Component */
function Input({ label, type = "text", placeholder }) {
    return (
        <div>
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            />
        </div>
    );
}
