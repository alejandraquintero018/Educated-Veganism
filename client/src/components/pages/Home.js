import React from 'react';
import { motion } from 'framer-motion';

export default function () {
    return (

        <section>

            <motion.div className="pt-48 grid grid-col-3 mx-auto max-w-100"
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                // viewport={{ root: scrollRef }}
                viewport={{ once: true }}
                animate={{ y: 100 }}
                transition={{
                    type: 'spring',
                    bounce: 0.15,
                    duration: 3.5,
                    delay: 1.0,
                    ease: [0, 0.71, .5, 1.01]
                }}>

                <h1 className="col-span-2 col-start-1 mx-auto text-9xl pb-20 text-center">
                    Educated Veganism
                </h1>

                <div className="col-span-2 col-start-2 mx-auto py-16 pr-10">

                    <p className="text-2xl">
                        The Internet is known for misinformation that can range from satirical to harmful. When it comes to veganism, the internet is no different.
                        From sensational headlines of parents contributing to their child’s untimely death through vegan diets to exaggerated claims of major organizations such as PETA,
                        the internet is cluttered with exessive, judgemental and misleading information.
                    </p>
                </div>
            </motion.div>

            <motion.div className="grid grid-col-3 mx-auto max-w-100 "
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                // viewport={{ root: scrollRef }}
                viewport={{ once: true }}
                animate={{ y: 100 }}
                transition={{
                    type: 'spring',
                    bounce: 0.15,
                    duration: 3.5,
                    delay: 1.0,
                    ease: [0, 0.71, .5, 1.01]
                }}>

                <div className="col-span-2 col-start-1 mx-auto content-end">
                    <p className=" mx-10  text-2xl">
                        The mission of Educated Veganism is to give everyone access to a narrowed down, high quality
                        resources ranging from books to podcasts to documentaries and blogs aimed to simplify and demystify veganism.
                    </p>

                </div>

                <div className="col-span-2 col-start-2 mx-auto py-16 content-end pr-10">

                    <p className=" text-2xl">
                        Educated Veganism has purposely been left private as well as minimal
                        to give you a private space to explore the what, the why and the how behind a plant based lifestyle leaving out the distractions, pressure and judgement
                        that come with social media and the exessive information found online.
                    </p>
                </div>

            </motion.div>



        </section>

    )

}

