
import { useState } from 'react'
import './App.css'

import Logo from './components/assets/E.png'
import Auth from './utils/auth'; 

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './components/pages/Home'
import Why from './components/pages/Why';
import What from './components/pages/What';
import How from './components/pages/How';
import Contribute from './components/pages/Contribute';
import Register from './components/pages/Register';
import Profile from './components/pages/Profile';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

//const mongoose = require('mongoose')


const navigation = [
  { name: 'What?', href: '/what' },
  { name: 'Why?', href: '/why' },
  { name: 'How?', href: '/how' },
  { name: 'Suggest', href: '/suggest' },
  { name: 'Profile', href: '/me' }
]

export default function Main() {
  const [currentPage, setCurrentPage] = useState('navigation');

  return (

    <ApolloProvider client={client}>
      <div className="isolate bg-white mx-auto bg-gradient-to-r from-[#FDFCDC] to-[#FED9B7]">

        <div className="px-6 pt-10 mx-auto">

          <nav className="flex h-9 mx-auto justify-between" aria-label="Global">

            <div className="flex  md:flex-1 justify-start " aria-label="Global">
              <a href="/" className="h-1/2 hover:color-orange-600 ">
                <img className='w-1/6' src={Logo} />
              </a>
            </div>
            <div className="lg:flex lg:flex-1 lg:justify-center lg:gap-x-10">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="font-light text-3xl hover:text-orange-300 ">
                  {item.name}
                </a>
              ))}
            </div>

            <div className=" lg:flex lg:min-w-0 lg:flex-1 pl-20 lg:justify-end">

              {Auth.loggedIn() ? (<a className=" font-light text-3xl hover:text-orange-300" href="/" onClick={Auth.logout}> Logout</a>) : (<a href="/register" className=" font-light text-3xl hover:text-orange-300">
                Register / Log in
              </a>)}
            </div>

          </nav>

          <Router>
            <>
              <Routes>
                <Route
                  path="/"
                  element={<Home />}
                />
                <Route 
                path="/me" 
                element={<Profile />}
              />
                <Route
                  path="/why"
                  element={<Why />}
                />
                <Route
                  path="/what"
                  element={<What />}
                />
                <Route
                  path="/how"
                  element={<How />}
                />
                <Route
                  path="/suggest"
                  element={<Contribute />}
                />
                <Route
                  path="/register"
                  element={<Register />}
                />
              </Routes>
            </>
          </Router>

        </div>

      </div>

    </ApolloProvider>
  )
}


