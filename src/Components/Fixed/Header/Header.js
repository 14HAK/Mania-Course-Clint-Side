import React, { useState } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Logo from '../../Assests/Logo/Logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav x-data="{ isOpen: false }" className="bg-white shadow dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center">
          <div className="flex items-center justify-between">
            <div>
              <Link className="text-2xl font-bold text-gray-800 transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" to='/'><img className='h-[40px]' src={Logo} alt="mania course logo" /></Link>
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
            <>
              <label htmlFor="AcceptConditions" className="relative left-[100px] h-6 w-12 cursor-pointer">
                <input type="checkbox" id="AcceptConditions" className="peer sr-only" />
                <span className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-green-500" />
                <span className="absolute inset-0 m-1 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-6" />
              </label>

            </>

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


// toggle svg photo 

{/* <div className='dark light button'>
<svg id="theme-toggle-dark-icon" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
<svg id="theme-toggle-light-icon" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd" /></svg>
</div> */}