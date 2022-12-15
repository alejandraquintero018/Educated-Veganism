import React from 'react';

import { useQuery, useMutation } from '@apollo/client';
import { ADD_LINK } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

export default function AddBtn({ linkId }) {

    const { loading, data: meData } = useQuery(QUERY_ME);
    const [saveLinks, { error }] = useMutation(ADD_LINK);
    const handleAddLink = async (linkId) => {
        console.log('Function ran');
        // get token
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const { data } = await saveLinks({
                variables: { linkId },
            });
        }
        catch (err) {
            console.error(err);
        }
    };

    if (loading) {
        return <h2 className="text-center">This page is taking a while to load </h2>;
    }

    return (
        <div>
            {Auth.loggedIn() ? (
                    <button type="button"
                        onClick={() => handleAddLink(linkId)}
                        class="inline-block px-6 py-4 bg-transparent font-semibold 
                        text-md uppercase rounded hover:bg-orange-300 focus:bg-gray-100 focus:outline-none 
                focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out">Add To Library</button>) :
                (<div>Log in to add this link to your library </div>)}


        </div>

    )

}
