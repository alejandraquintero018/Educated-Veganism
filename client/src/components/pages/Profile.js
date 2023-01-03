import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import { ADD_NOTE } from "../../utils/mutations"
import Auth from '../../utils/auth';

export default function Profile() {

    const { loading, data } = useQuery(QUERY_ME);
    const me = data?.me || {};
    const links = data?.me.links || [];
    const notes = data?.me.notes || [];
    console.log(notes);

    const [noteData, setNoteData] = useState({
        note: ""
    })

    const [addNote, { err }] = useMutation(ADD_NOTE)

    const handleNoteChange = (event) => {
        const { name, value } = event.target
        setNoteData({ ...noteData, [name]: value })
    }

    const handleNoteSubmit = async (event) => {
        event.preventDefault();
        console.log(event.target.dataset.linkid);
        const linkId = event.target.dataset.linkid;

        try {
            const { data } = await addNote({
                variables: { ...noteData, linkId }
            })
            console.log(data)
            Auth.login(data.addNote.token)
        } catch (err) {
            console.log(err)
        }
        setNoteData({
            note: ""
        });

    }

    if (!Auth.loggedIn()) {
        return <Navigate to="/register" />;
    }

    if (loading) {
        return <div>
            <div class="flex justify-center items-center pt-48 h-screen">
                <div class="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full text-[#FED9B7]" role="status">
                    <span class="visually-hidden"></span>
                </div>
            </div>
        </div>;
    }

    return (

        <main className='pt-20 min-h-screen'>
            {Auth.loggedIn() && me ? (
                <h1 className='col-span-2 mx-auto text-6xl  text-center'> Welcome back to your library {me.username}</h1>
            ) : (null)}

            <div>
                {Auth.loggedIn() && me ? (
                    < div className='py-10'>
                        {links.map((link) => (
                            <div key={link._id} className=" flex justify-center py-4">

                                <div className=" grid grid-col-2 block p-6 rounded-lg shadow-lg border-[#0081A7] bg-white w-3/4 ">

                                    <div className="col-span-1">
                                        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{link.name}</h5>
                                        <p class="text-gray-700 text-base mb-4">
                                            {link.description}
                                        </p>
                                        <a target="_blank" href={link.link}>
                                            <button type="button" className=" inline-block px-6 py-2.5 bg-[#0081A7] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#00AFB9] hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Go to resource</button>
                                        </a>

                                    </div>

                                    <div className="col-span-1 ">
                                        <h3 className="pt-4 text-lg"> Insights </h3>

                                        {notes.map(note => {
                                            return (
                                                <p key={link._id} className='p-2'>
                                                    {note.note}
                                                </p>
                                            );
                                        })}

                                        <form onSubmit={handleNoteSubmit} data-linkid={link._id}>
                                            <div className="flex justify-center">
                                                <div className="mb-3 xl:w-full">
                                                    <textarea
                                                        className="form-control w-full text-base font-normal bg-white border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:bg-white focus:border-[#00AFB9] focus:outline-none"
                                                        id="note"
                                                        rows="2"
                                                        name="note"
                                                        type="input"
                                                        value={noteData.note}
                                                        onChange={handleNoteChange}>
                                                    </textarea>
                                                </div>
                                            </div>
                                            <a>
                                                <button type="submit" className=" inline-block px-6 py-2.5 bg-[#0081A7] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#00AFB9] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add Note</button>
                                            </a>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </ div>

                ) : (null)}

            </div>

        </main>

    )
}