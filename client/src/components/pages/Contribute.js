import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


export default function Contribute() {

    const [emailData, setEmailData] = useState({
        firstname: "",
        lastname: "",
        message: "",
        emailaddress: "",
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setEmailData({ ...emailData, [name]: value })
    }

    const form = useRef();

    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_9nes2pi', 'template_7123p8r', form.current, 'OyDLVDU7bKQ73ycgR')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setEmailData({
            firstname: "",
            lastname: "",
            message: "",
            emailaddress: "",
        });
    };

    return (

        <section className="pt-48">

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1.5,
                    delay: 0.35,
                }}
            >

                <h1 className=" col-span-2 mx-auto text-7xl  text-center">
                    Have Suggestions?
                </h1>

                <p className=" text-lg py-10 col-span-2 mx-auto text-center">
                    
                    Fill out the form below to suggest content that you believe would benefit others through thier plant-based journey.
                </p>

                <div className="w-1/2 mx-auto pb-20">

                    <form ref={form} onSubmit={sendEmail} action="#" method="POST" >
                        <div className="overflow-hidden shadow sm:rounded-md bg-white">
                            <div className="col-span-3 max-w-100 bg-white px-4 py-5">

                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="first-name" className="block font-medium text-gray-700">
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            name="firstname"
                                            id="first-name"
                                            value={emailData.firstname}
                                            onChange={handleInputChange}
                                            autoComplete="given-name"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 "
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="last-name" className="block font-medium text-gray-700">
                                            Last name
                                        </label>
                                        <input
                                            type="text"
                                            name="lastname"
                                            value={emailData.lastname}
                                            onChange={handleInputChange}
                                            id="lastname"
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
                                            name="emailaddress"
                                            value={emailData.emailaddress}
                                            onChange={handleInputChange}
                                            id="email-address"
                                            autoComplete="email"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 "
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-4">
                                        <label htmlFor="url" className="block font-md text-gray-700">
                                            URL of where we can find the content
                                        </label>
                                        <input
                                            name="message"
                                            id="message"
                                            value={emailData.message}
                                            onChange={handleInputChange}
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

            </motion.div>

        </section>

    )
}