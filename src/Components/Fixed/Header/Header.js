import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav x-data="{ isOpen: false }" className="bg-white shadow dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center">
          <div className="flex items-center justify-between">
            <div>
              <Link className="text-2xl font-bold text-gray-800 transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" to='/'><span className='bg-green-700 p-1 rounded-md text-white'>MANIA</span> NEWS
              </Link>
            </div>


            <div className="flex lg:hidden">
              <button x-cloak onClick={() => setIsOpen(!isOpen)} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                {
                  !isOpen ?
                    <svg x-show="!isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                    </svg>
                    :
                    <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                }
              </button>
            </div>
          </div>

          <div x-cloak className={`${isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'} absolute inset-x-0 z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between `} >
            <div className="flex flex-col text-gray-600 capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
              <a href="#" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">features</a>
              <a href="#" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">downloads</a>
              <a href="#" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">docs</a>
              <a href="#" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">support</a>

            </div>

            <div className="flex justify-center items-center lg:flex lg:mt-0 lg:-mx-2">

              {
                true ?
                  <>
                    <Link><button className="px-4 py-1 mr-2 font-medium tracking-wide text-slate-800 border border-blue-400 capitalize transition-colors duration-300 transform rounded-md hover:bg-blue-500 hover:text-white focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                      Sign Out
                    </button></Link>

                    <a href="#" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">
                      kodom ali</a>


                    <div className="flex items-center justify-center w-10 h-10 overflow-hidden rounded-full">
                      <img src='https://ds.rokomari.store/rokomari110/people/4e5136be1_15572.jpg' alt='' />
                    </div>

                    <BsPersonCircle className='w-10 h-10' />


                  </>
                  :
                  <>
                    <Link to='/signin'><button className="px-4 py-1 mr-2 font-medium tracking-wide text-slate-800 border border-blue-400 capitalize transition-colors duration-300 transform rounded-md hover:bg-blue-500 hover:text-white focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                      Sign In
                    </button></Link>

                    <Link to='/signup'><button className="px-4 py-1 mr-2 font-medium tracking-wide text-slate-800 border border-blue-400 capitalize transition-colors duration-300 transform rounded-md hover:bg-blue-500 hover:text-white focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                      Sign Up
                    </button></Link>

                  </>
              }

            </div>
          </div>
        </div>
      </div >
    </nav >
  );
};

export default Header;