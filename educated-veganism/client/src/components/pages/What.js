//import { motion } from 'framer-motion';
import React from 'react';
import AddBtn from '../AddBtn.js';

import { useQuery } from '@apollo/client';
import { QUERY_LINK } from '../../utils/queries.js';
import Richroll from '../assets/richRoll.jpeg';



export default function What() {

    const { loading, data } = useQuery(QUERY_LINK);

    console.log(data);

    if (loading) {
        return <h1 className='text-center'> This page is taking a while to load. </h1>;
    }
    const whatCategory = data?.links || [];
    console.log(whatCategory);
    const what = whatCategory?.filter(link => link.category === 'What')

    return (

        <section className="pt-48 pb-20">
            <div >
                <h1 className=" text-8xl font-light text-center">
                    What is Veganism?
                </h1>

                <p className="pt-48 text-center text-3xl">
                    Living a plant-based lifestyle can mean a lot of different things to alot of different people.

                </p>

                {what.map((link) => (
                    <>

                        <a target="_blank" className='col-span-1' href={link.link} >

                            <div className='col-span-1 mx-auto mt-6 py-5 '>

                                <h1 className='text-2xl'>
                                    {link.name}
                                </h1>

                                <p>
                                    {link.description}
                                </p>


                            </div>
                        </a>

                        <div className='text-center w-96rem mx-auto'>
                            < AddBtn />
                        </div>

                        <img className="mx-auto col-start-2 rounded-lg w-1/2 max-h-[32rem] py-4" src={Richroll} />

                        <div className='text-center w-96rem mx-auto'>
                            < AddBtn />
                        </div>


                    </>
                ))}


            </div>


        </section>

    )
}