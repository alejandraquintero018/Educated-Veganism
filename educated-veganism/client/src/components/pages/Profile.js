import React from 'react';
import { Navigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth';

export default function Profile() {

    const { loading, data } = useQuery(QUERY_ME);

    const me = data?.me || {};
    const links = data?.me.links || [];
     // console.log(me.links); 

    console.log(me.links);

    if (!Auth.loggedIn()) {
        return <Navigate to="/register" />;
    }

    if (loading) {
        return <h1 className='text-center'> This page is taking a while to load </h1>
    }

        

    return (

        <main className='pt-20'>
            {Auth.loggedIn() && me? (
                <h1 className='col-span-2 mx-auto text-6xl  text-center'> Welcome back {me.username}</h1>
            ): (null)}

            <div className='col-span-2 mx-auto text-4xl h-screen py-10'> Your Library 

            {Auth.loggedIn() && me? (
                <ul>
                    <h1>test</h1>

                
                    {links.map(link => {
                        return (
                            <li>{link.name}</li>
                        );
                    })}
                </ul>
                
                
                // <div>
                //     {me.map((medata) => (
                //     <h2>{medata.me.links.name}</h2>
                //     ))}
    
                // </div>
            ) : (null)}

            </div>

        </main>

    )
}