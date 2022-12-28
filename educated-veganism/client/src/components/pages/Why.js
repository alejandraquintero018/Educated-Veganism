import { motion } from 'framer-motion';
import React from 'react';
import AddBtn from '../AddBtn.js';

import { useQuery } from '@apollo/client';
import { QUERY_LINK, QUERY_ME } from '../../utils/queries.js';
import edWinters from "../assets/EdWinters.jpeg";
import fiberFueled from "../assets/fiberFueled.png";
import notToDie from "../assets/howNotToDie.jpeg";
import seaspiracy from "../assets/seaspiracy.jpeg";

export default function Why() {

    const imagesPool = [
        { src: fiberFueled },
        { src: notToDie },
        { src: seaspiracy },
        { src: edWinters }
    ];

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
    const whyCategory = data?.links || [];
    console.log(whyCategory);
    const why = whyCategory?.filter(link => link.category === 'Why')

    let result = [];
    let i, l = Math.min(why.length, imagesPool.length);

    for (i = 0; i < l; i++) {
        result.push(why[i], imagesPool[i]);
    }

    result.push(...why.slice(l), ...imagesPool.slice(l));
    console.log(result)

    return (

        <section className="pt-40 pb-20">

            <motion.div
                initial={{ opacity: 0, y: -50}}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 3.0,
                    delay: 0.25
                }}
            >
                <h1 className=" mx-auto text-9xl font-light text-center">
                    Why?
                </h1>

                <div className="grid grid-col-3 mx-auto max-w-100  px-6 lg:px-8 pb-20">

                    <div className="col-span-2 col-start-2 pt-20 mx-auto content-end">

                        <p className="text-2xl">
                            This is the question many ask before sacrificing steaks and pork chops.
                        </p>
                    </div>

                    <p className="col-span-2 mt-6 pt-10 text-2xl ">
                        Why should I transition to a plant based lifestyle?
                    </p>

                    <p className="col-span-2 col-start-2 mt-6 pt-10 text-2xl">
                        There are many benefits to leading a plant based lifestyle. From the health benefits to the environmental impacts and ethical implications.
                        Below are some resources to some of the best arguments to leading a plant-based diet.
                    </p>

                </div>

            </motion.div>

            <div class="grid grid-col-2 grid-flow-col text-center mx-auto">

                <div class="col-span-1 text-center flex flex-col space-y-64 pt-10 place-items-end">
                    {why.map((data) => (

                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                type: 'spring',
                                bounce: 0.25,
                                duration: 1.5,
                                delay: 0.25,
                                //ease: [0, 0.71, .5, 1.01]
                            }}>

                            <div className=' text-center mx-auto border-2 pb-8 border-[#243c5a] min-w-max max-w-4xl max-h-52 rounded-lg'>

                                <div className='p-4 hover:bg-[#FED9B7]'>

                                    <a target="_blank" href={data.link}>

                                        <h1 className='text-2xl'>
                                            {data.name}
                                        </h1>

                                        <p>
                                            {data.description}
                                        </p>
                                    </a>

                                </div>

                                <div className='py-4 pb-0'>
                                    <AddBtn linkId={data._id} />
                                </div>

                            </div>
                        </motion.div>
                    ))}

                </div>

                <div class=" col-span-2 content-start">
                    {imagesPool.map((data) => (
                        <motion.div
                            initial={{ opacity: 0, y: 250 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                type: 'spring',
                                bounce: 0.25,
                                duration: 2.5,
                                delay: 0.25,
                                ease: [0, 0.71, .5, 1.01]
                            }}>

                            <img className="mx-auto col-span-1 w-auto h-[29rem] pb-24 rounded-lg" src={data.src} />
                        </motion.div>
                    ))}
                </div>



            </div>

        </section>


    )
}