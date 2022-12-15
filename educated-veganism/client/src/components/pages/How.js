//import { motion } from 'framer-motion';
import React from 'react';
//import AddBtn from '../AddBtn.js';

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
        const token = Auth.loggedIn() ? Auth.getToken() : null;
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

        <section className="pt-48 pb-20">

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

                <p className="col-span-2 col-start-2 mt-6 pt-10 text-2xl">
                    There a several different blogs which cover a range of different eating styles
                </p>
            </div>


            <div className="grid grid-col-2 grid-flow-col text-center mx-auto">

                <div className="col-span-1 text-center ml-20 flex flex-col space-y-40 place-items-end">
                    {how.map((data) => (

                        <div key={data.linkId} className=' text-center mx-auto place-items-end '>

                            <div className='hover:bg-orange-300'>

                                <a target="_blank" href={data.link}>

                                    <h1 className='text-2xl'>
                                        {data.name}
                                    </h1>

                                    <p>
                                        {data.description}
                                    </p>
                                </a>

                            </div>

                            {/* <div className='pt-10 pb-0'>
                                {Auth.loggedIn() && meData ? (
                                    <button type="button"
                                        onClick={() => handleAddLink()}
                                        class="inline-block px-6 py-4 bg-transparent font-semibold 
                                text-md uppercase rounded hover:bg-orange-300 focus:bg-gray-100 focus:outline-none 
                                    focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out">Add To Library</button>) :
                                    (null)}
                            </div> */}

                        </div>
                    ))}

                </div>

                <div className=" col-span-2 content-start ">
                    {imagesPool.map((data) => (

                        <img key={data.src} className="mx-auto col-span-1 w-1/2 max-h-96 rounded-lg pb-12" src={data.src} />

                    ))}
                </div>

            </div>

        </section>

    )
}