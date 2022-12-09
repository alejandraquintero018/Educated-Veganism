
import { useState } from 'react'

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


const navigation = [
  { name: 'What?', href: '/what' },
  { name: 'Why?', href: '/why' },
  { name: 'How?', href: '/how' },
  { name: 'Contribute', href: '/contribute' },
]

export default function Main() {
  const [currentPage, setCurrentPage] = useState('navigation');

  return (

    <ApolloProvider client={client}>
      <div className="isolate bg-white mx-auto bg-gradient-to-r from-indigo-500 to-teal-400">

        <div className="px-6 pt-10 mx-auto lg:px-8">


          <nav className="flex h-9 mx-auto justify-between" aria-label="Global">

            <div className="flex md:flex-1" aria-label="Global">
              <a href="/home" className='text-3xl text-indigo-900 hover:text-orange-600'>
              EV
              </a>
            </div>
            <div className="flex lg:hidden">

            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 hover:text-orange-900 lg:justify-center lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="font-light text-3xl text-indigo-900 hover:text-orange-600 ">
                  {item.name}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
              <a href="/register" className="inline-block font-light text-3xl text-indigo-900 hover:text-orange-600">
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg> */}
                Register / Log in
              </a>
            </div>
          </nav>

          <div className="grid grid-col-3 mx-auto max-w-100 pt-20 pb-32 sm:pt-48 sm:pb-40 px-6 lg:px-8">

                {/* useQuery to get data from server
                // filter for each cat
                pass data as prop to relevant cat */}
            <Router>
              <>
                <Routes>
                  <Route
                    path="/home"
                    element={<Home />}
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
                    path="/contribute"
                    element={<Contribute />}
                  />
                </Routes>
              </>
            </Router>

          </div>

        </div>

      </div>

    </ApolloProvider>
  )
}


