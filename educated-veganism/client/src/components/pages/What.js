import { motion } from 'framer-motion';
import React from 'react';
import AddBtn from '../AddBtn.js';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_LINK } from '../../utils/queries.js';
import Richroll from '../assets/richRoll.jpeg';


export default function What() {

    const { loading, data } = useQuery(QUERY_LINK);

    console.log(data);

    if (loading) {
        return <div>
            <div class="flex justify-center items-center pt-48 h-screen">
                <div class="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full text-[#FED9B7]" role="status">
                    <span class="visually-hidden"></span>
                </div>
            </div>
        </div>;
    }
    const whatCategory = data?.links || [];
    console.log(whatCategory);
    const what = whatCategory?.filter(link => link.category === 'What')

    return (
        <section className="pt-40 pb-20 max-w-100">

            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 2.0,
                    delay: 0.5,
                    ease: [0, 0.71, .5, 1.01]
                }}
            >

                <h1 className="text-8xl font-light text-center">
                    What?
                </h1>

                <div className="grid grid-col-3 mx-auto max-w-100  px-6 lg:px-8 pb-20">

                    <div className="col-span-1 col-start-1 pt-20 mx-auto content-end">
                        <p className="text-2xl text-center">
                            What is Educated Veganism? Educated Veganism is approaching a plant-based lifestyle with intentionality, knowledge, purpose and balance.
                            Rich Roll hosts a podcast, has a plant-based Masterclass, and is the author of several books whose content surrounds around what it means to live an intentional plant-based lifestyle.
                        </p>
                    </div>

                </div>

            </motion.div>

            <div class="grid grid-col-2 grid-flow-col gap-4 text-center mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    animate={{ y: 100 }}
                    viewport={{ once: true }}
                    transition={{
                        type: 'spring',
                        bounce: 0.25,
                        duration: 1.5,
                        delay: 0.5,
                        ease: [0, 0.71, .5, 1.01]
                    }}>

                    <div class="col-span-1 text-center ml-20 flex flex-col space-y-40 place-items-end">
                        {what.map((data) => (

                            <div className=' text-center mx-auto place-items-end border-2 border-[#243c5a] hover:shadow-lg outline-offset-8 rounded-lg'>

                                <div className=' hover:bg-[#FED9B7] p-4'>

                                    <a target="_blank" href={data.link}>

                                        <h1 className='text-2xl'>
                                            {data.name}
                                        </h1>

                                        <p>
                                            {data.description}
                                        </p>
                                    </a>

                                </div>

                                <div className='pt-10 pb-0'>
                                    <AddBtn linkId={data._id} />
                                </div>

                            </div>
                        ))}

                    </div>

                </motion.div>

                <div class=" col-span-1 content-start">

                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        animate={{ y: 100 }}
                        viewport={{ once: true }}
                        transition={{
                            type: 'spring',
                            bounce: 0.25,
                            duration: 1.5,
                            delay: 0.5,
                            ease: [0, 0.71, .5, 1.01]
                        }}>

                        <img className="mx-auto w-1/2 pb-12 w-auto h-[32rem] pb-20 rounded-lg" src={Richroll} />
                    </motion.div>

                </div>


            </div>


        </section>

    )
}