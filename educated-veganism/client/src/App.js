

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Why from './components/pages/Why'; 

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
  { name: 'Register', href: '/register' }
]

export default function Home() {
  const [currentPage, setCurrentPage] = useState('Header');

  // const renderPage = () => {
  //   if (currentPage === 'Header') {
  //     return <Header />;
  //   } if (currentPage === 'ContactMe') {
  //     return <ContactMe />;
  //   }if (currentPage === 'Project') {
  //     return <Project />;
  //   }if (currentPage === 'About') {
  //     return <About />;
  //   }
  // // }

  return (
    <div className="isolate bg-white mx-auto bg-gradient-to-r from-indigo-500 to-teal-400">
      <div className="px-6 pt-6 mx-auto lg:px-8">
        <div>

          <nav className="flex h-9 mx-auto justify-between" aria-label="Global">

            <div className="flex md:flex-1" aria-label="Global">
              find a logo and insert later
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
              <a href="#" className="inline-block font-light text-3xl text-indigo-900 hover:text-orange-600">
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg> */}
                Register / Log in
              </a>
            </div>


          </nav>

        </div>
      </div>


      <main >
        <div className="grid grid-col-3 mx-auto max-w-100 pt-20 pb-32 sm:pt-48 sm:pb-40 px-6 lg:px-8">


          <h1 className=" col-span-2 mx-auto text-9xl font-light text-center">
            Educated Veganism
          </h1>

          <div className="col-span-2 col-start-2 mx-auto content-end">

            <p className="pt-10 text-2xl">
              The Internet is known for misinformation that can range from satirical to harmful. When it comes to veganism, the internet is no different.
              From sensational headlines of parents contributing to their child’s untimely death through vegan diets to exaggerated claims of major organizations such as PETA.
              There is no shortage of misinformation regarding a plant based lifestyle.
            </p>
          </div>



          <p className="col-span-2 mt-6 pt-10 text-2xl text-center">
            The aim of Educated Veganism is to give everyone access to some of the most well researched and reliable information available out there.
            From books and podcasts explaining the benefits of a plant based lifestyle not only to yourself but to the environment as well.
          </p>

          {/* <p className="mt-6 pt-10 text-2xl text-center">

              </p> */}



        </div>



      </main>


    </div>
  )
}


