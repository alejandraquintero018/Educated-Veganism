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
        return <h2 className="text-center">This is taking a while to load </h2>;
    }

    return (
        <div className='p-4'>
            {Auth.loggedIn() ? (
                    <button type="button"
                        onClick={() => handleAddLink(linkId)}
                        class="inline-block px-6 py-4 bg-[#0081A7] font-semibold 
                        text-md uppercase rounded text-bold hover:bg-[#00AFB9]
                 active:bg-[#00AFB9] text-bold ">Add To Library</button>) :
                (<p>Log in to add this link to your library </p>)}

        </div>

    )

}
