//import { motion } from 'framer-motion';
import React from 'react';
import AddBtn from '../AddBtn.js';

import { useQuery } from '@apollo/client';
import { QUERY_LINK } from '../../utils/queries.js';
import Rainbow from '../assets/rainbowPlantLife.jpeg';
import Neto from '../assets/netoCraves.png';
import Minimal from '../assets/minimalistBaker.png';


export default function How() {

    const imagesPool = [
        { src: Neto },
        { src: Rainbow },
        { src: Minimal }
    ];

    const { loading, data } = useQuery(QUERY_LINK);

    console.log(data);

    if (loading) {
        return <div> This page is taking a while to load. </div>;
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

        <section className="pt-48 pb-20 grid grid-col-3">
            <h1 className=" col-span-2 mx-auto text-9xl font-light text-center">
                How?
            </h1>

            <p className="pt-48 col-span-2 text-3xl">

                You may have the question, of how do I get started on living a plant-based life? What do I eat? I dont like salads, what would I even eat?
                Below are some vegan food blogs to get you started on your plant-based journey.

            </p>

            {result.map((link) => (
                <>

                    <a target="_blank" className='col-span-1' href={link.link} >

                        <div className=' mx-auto mt-6 '>

                            <h1 className='col-span-1 text-2xl'>
                                {link.name}
                            </h1>

                            <p>
                                {link.description}
                            </p>
                        </div>
                    </a>

                    <img className="mx-auto col-span-2 rounded-lg w-1/2 pb-3 py-4" src={link.src} />


                    <div className='mx-auto text-center w-96rem mx-auto pb-4'>

                        < AddBtn />

                    </div>
                </>
            ))}


        </section>

    )
}