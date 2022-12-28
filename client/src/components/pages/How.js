import { motion } from 'framer-motion';
import React from 'react';
import AddBtn from '../AddBtn.js';

import { QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth';

import { ADD_LINK } from '../../utils/mutations';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_LINK } from '../../utils/queries.js';
import Rainbow from '../assets/rainbowPlantLife.jpeg';
import Neto from '../assets/netoCraves.png';
import Minimal from '../assets/minimalistBaker.png';


export default function How() {

    const { data: meData } = useQuery(QUERY_ME);
    const [saveLinks, { error }] = useMutation(ADD_LINK);

    const handleAddLink = async (linkId) => {
        // get token
        const token = Auth.loggedIn() ? Auth.getToken() : linkId;
        console.log(linkId);
        if (!token) {
            return false;
        }

        try {
            const { data } = await saveLinks({
                variables: { linkId },
            });
            saveLinks(linkId);

        }
        catch (err) {
            console.error(err);
        }
    };

    const imagesPool = [
        { src: Neto },
        { src: Rainbow },
        { src: Minimal }
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
    const howCategory = data?.links || [];
    console.log(howCategory);
    const how = howCategory?.filter(link => link.category === 'How');

    let result = [];
    let i, l = Math.min(how.length, imagesPool.length);

    for (i = 0; i < l; i++) {
        result.push(how[i], imagesPool[i]);
    }

    result.push(...how.slice(l), ...imagesPool.slice(l));
    console.log(result)

    return (

        <section className="pt-40 pb-20">

            <motion.div
                initial={{ opacity: 0, y: -50}}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 3.0,
                    delay: 0.25,
                }}
            >
                <h1 className=" col-span-2 mx-auto text-9xl font-light text-center">
                    How?
                </h1>

                <div className="grid grid-col-3 mx-auto max-w-100  px-6 lg:px-8 pb-20">

                    <div className="col-span-2 col-start-2 pt-20 content-end">

                        <p className="text-2xl">
                            How do you transition to a plant-based diet and lifestyle? How do I make delicious plant-based foods?
                            How do I stay full on a plant-based diet? How do I get enough protein in my diet? I dont like salads, how I make something that I like?
                            How do I subsitute eggs in my favorite baked goods? How do I veganize my favorite foods?
                        </p>
                    </div>

                    <p className="col-span-2 mt-6 pt-10 text-2xl">
                        Whether you like eating hamburgers or tamales, curry or sherpard's pie, there are plant-based versions of everything that you can imagine.
                        Below are some vegan food blogs to get you started on your plant-based journey.
                    </p>

                </div>

            </motion.div>


            <div class="grid grid-col-2 grid-flow-col text-center mx-auto">

                <div class="col-span-1 text-center flex flex-col space-y-64 pt-10 place-items-end">
                    {how.map((data) => (

                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                type: 'spring',
                                bounce: 0.25,
                                duration: 1.5,
                                delay: 0.25,
                                ease: [0, 0.71, .5, 1.01]
                            }}>

                            <div className='text-center mx-auto border-2 pb-8 border-[#243c5a] rounded-lg'>

                                <div className='hover:bg-[#FED9B7] p-4'>

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
                        </motion.div>

                    ))}

                </div>

                <div class=" col-span-2 content-start">
                    {imagesPool.map((data) => (
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                type: 'spring',
                                bounce: 0.25,
                                duration: 1.5,
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