//import { motion } from 'framer-motion';
import React from 'react';
import AddBtn from '../AddBtn.js';

import { useQuery } from '@apollo/client';
import { QUERY_LINK, QUERY_ME } from '../../utils/queries.js';
import edWinters from "../assets/edWinters.jpeg";
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
        return <div> This page is taking a while to load... </div>;
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

        <section className="pt-48 pb-20">


            <h1 className=" col-span-2 mx-auto text-9xl font-light text-center">
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
                    Below are resources categorized by the different advantages of leading a plant based lifestyle.

                </p>

            </div>



            <div class="grid grid-col-2 grid-flow-col gap-4 text-center mx-auto">

                <div class="col-span-1 text-center ml-20 flex flex-col space-y-40 place-items-end">
                    {why.map((data) => (

                        <div className=' text-center mx-auto place-items-end'>

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

                            <div className='pt-10 pb-0'>
                                <AddBtn linkId={data._id} />
                            </div>

                        </div>
                    ))}

                </div>

                <div class=" col-span-2 content-start">
                    {imagesPool.map((data) => (
                        <img className="mx-auto col-span-1 w-1/2 pb-12 rounded-lg" src={data.src} />

                    ))}
                </div>

            </div>

            {/* {result.map((link) => (
                <div className='py-2'>
                    <a target="_blank" href={link.link}>
                        <h1 className=' text-2xl'>
                            {link.name}
                        </h1>
                        <p>
                            {link.description}
                        </p>
                    </a>
                    <div>
                        <img className="mx-auto rounded-lg w-1/2 max-h-[32rem] pb-3 py-4" src={link.src} />
                    </div>

                    <div className='text-center w-96rem mx-auto pb-4'>
                        < AddBtn />
                    </div>

                </div>

            ))} */}



        </section>


    )
}