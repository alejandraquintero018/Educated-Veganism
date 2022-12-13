//import { motion } from 'framer-motion';
import React, { useState } from 'react';

import Logo from '../assets/E.png'

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth'; 

export default function Register() {

  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  })

  const [login, {err}] = useMutation(LOGIN)

  const handleLoginChange = (event) => {
    const { name, value } = event.target
    setLoginData({...loginData, [name]: value })
  }

  const handleLoginSubmit = async (event) => {
    event.preventDefault(); 
    try { 
      const {data} = await login({
        variables: {...loginData}
      })
      console.log(data)
      Auth.login(data.addUser.token)
    }
    catch (err) {
      console.log(err)
    }
    setLoginData({
      username: "",
      password: ""
    })
  }

  const [registerData, setRegisterData] = useState({
    username: "",
    email: "", 
    password: ""
  })

  const [addUser, {error}] = useMutation(ADD_USER)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setRegisterData({...registerData, [name]: value })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault(); 
    try {
      const {data} = await addUser({ 
        variables: {...registerData}
      })
      console.log(data)
      Auth.login(data.addUser.token)
    }
    catch(err) {
      console.log(err)
    }
    setRegisterData({
      username: "",
      email: "", 
      password: ""
    }); 
  }

  return (
    <>
      <img
        className="mx-auto w-1/4 justify-center pt-20 "
        src={Logo}
      />

      <div className="flex min-h-full items-center justify-center pb-20 px-6 ">
        <div className="w-full max-w-md px-5">
          <div>
            <h2 className="mt-6 text-center text-5xl font-bold tracking-tight text-gray-900">
              Register for a new account
            </h2>
          </div>

          <form className="mt-8 text-xl space-y-6" action="#" method="POST" onSubmit={handleFormSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm p-1">
            <div>
                <label htmlFor="email-address" className="sr-only text-xl ">
                  Name
                </label>
                <input
                  id="name"
                  name="username"
                  type="name"
                  value={registerData.username}
                  required
                  className="text-xl relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  placeholder="Name"
                  onChange={handleInputChange}
                />

              </div>
              <div>
                <label htmlFor="email-address" className="sr-only text-xl ">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  value={registerData.email}
                  autoComplete="email"
                  required
                  className="text-xl relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  placeholder="Email address"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={registerData.password}
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  placeholder="Password"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-black py-2 px-4 text-md font-medium hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              >
                Register
              </button>
            </div>
          </form>
        </div>


        <div className='px-4'>
          <div className="w-full max-w-md">
            <div>

              <h2 className="mt-6 text-center text-5xl font-bold tracking-tight text-gray-900">
                Sign in to your account
              </h2>

            </div>
          </div>

          <form className="mt-8 text-xl space-y-6 px-4 py-0" action="#" method="POST" onSubmit={handleLoginSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only text-xl ">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="text-xl relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
                  placeholder="Email address"
                  onChange={handleLoginChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  placeholder="Password"
                  onChange={handleLoginChange}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-black  py-2 px-4 text-md font-medium hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>

          </form>


        </div>

      </div>
    </>
  )
}
