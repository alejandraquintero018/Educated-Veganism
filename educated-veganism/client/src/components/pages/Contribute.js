//import { motion } from 'framer-motion';
import React from 'react';


export default function Contribute() {
    return (

        <section className="pt-48">

                <h1 className=" col-span-2 mx-auto text-7xl  text-center">
                    Want to Contribute?
                </h1>

                <p className=" py-10 col-span-2 mx-auto text-center">

                    Fill out the form below to suggest content that you believe would benefit others through thier plant-based journey.
                </p>

                <div className="w-1/2 mx-auto pb-20">
                    <form action="#" method="POST" >
                        <div className="overflow-hidden shadow sm:rounded-md bg-white">
                            <div className="col-span-3 max-w-100 bg-white px-4 py-5">

                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 "
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                            Last name
                                        </label>
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 "
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-4">
                                        <label htmlFor="email-address" className="block font-md text-gray-700">
                                            Email address
                                        </label>
                                        <input
                                            type="text"
                                            name="email-address"
                                            id="email-address"
                                            autoComplete="email"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 "
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-4">
                                        <label htmlFor="url" className="block text-sm font-md text-gray-700">
                                            URL of where we can find the content
                                        </label>
                                        <input
                                            type="text"
                                            name="url"
                                            id="url"
                                            autoComplete="url"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        />
                                    </div>


                                </div>
                            </div>

                            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center rounded-md border border-transparent bg-orange-300 py-2 px-4 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Send
                                </button>
                            </div>

                        </div>

                    </form>
                </div>

        </section>

    )
}