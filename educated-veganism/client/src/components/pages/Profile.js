import React from 'react';
import { Navigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth';

export default function Profile() {

    const { loading, data:meData } = useQuery(QUERY_ME);

    console.log(meData);

    if (!Auth.loggedIn()) {
        return <Navigate to="/register" />;
    }

    if (loading) {
        return <h1 className='text-center'> This page is taking a while to load </h1>
    }

    return (

        <main className='pt-20'>
            {Auth.loggedIn() && meData? (
                <h1 className='col-span-2 mx-auto text-6xl  text-center'> Welcome back {meData.me.username}</h1>
            ): (null)}

            <div className='col-span-2 mx-auto text-4xl h-screen py-10'> Your Library 

            {Auth.loggedIn() && meData? (
                <div>
                    <h2>{meData.me.links.name}</h2>
                </div>
            ) : (null)}

            </div>

        </main>

    )
}