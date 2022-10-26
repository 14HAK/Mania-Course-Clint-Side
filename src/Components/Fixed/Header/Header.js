import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { BsPersonCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../ContextApi/ContextApi';
import Logo from '../../Assests/Logo/Logo.png';

const Header = () => {
  const { user, SignoutUser, setLoading } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = () => {
    SignoutUser()
      .then(() => {
        toast.success('Signout Success.')
      })
      .catch((error) => {
        toast.error('User not Signout!')
      })
      .finally(() => {
        setLoading(false)
      })
  }

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
              <Link to='/' className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-green-900 font-semibold">Course</Link>

              <Link to='/faq' className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-green-900 font-semibold">FAQ</Link>

              <Link to='/blog' className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-green-900 font-semibold">Blog</Link>

            </div>
            <>
              <label htmlFor="AcceptConditions" className="relative left-[100px] h-6 w-12 cursor-pointer">
                <input type="checkbox" id="AcceptConditions" className="peer sr-only" />
                <span className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-green-800" />
                <span className="absolute inset-0 m-1 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-6" />
              </label>

            </>

            <div className="flex justify-center items-center lg:flex lg:mt-0 lg:-mx-2">

              {
                user && user.emailVerified
                  ?
                  <>
                    <Link><button onClick={handleSignOut} className="px-4 py-1 mr-2 font-medium tracking-wide text-slate-800 border border-slate-400 capitalize transition-colors duration-300 transform rounded-md hover:bg-green-700 hover:text-white focus:outline-none">
                      Sign Out
                    </button></Link>

                    <Link to='/' className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">
                      {user.displayName}</Link>

                    {
                      user?.photoURL ?
                        <div className="flex items-center justify-center w-10 h-10 overflow-hidden border border-green-900 rounded-full">
                          <img src={user.photoURL} alt='' />
                        </div>
                        :
                        <BsPersonCircle className='w-10 h-10' />
                    }
                  </>
                  :
                  <>
                    <Link to='/signin'><button className="px-4 py-1 mr-2 font-medium tracking-wide text-slate-800 border border-slate-400 capitalize transition-colors duration-300 transform rounded-md hover:bg-green-700 hover:text-white focus:outline-none">
                      Sign In
                    </button></Link>

                    <Link to='/signup'><button className="px-4 py-1 mr-2 font-medium tracking-wide text-slate-800 border border-slate-400 capitalize transition-colors duration-300 transform rounded-md hover:bg-green-700 hover:text-white focus:outline-none">
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
