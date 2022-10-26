import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assests/Logo/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <div>
                <Link className="text-2xl font-bold text-gray-800 transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" to='/'><img className='h-[40px]' src={Logo} alt="mania course logo" /></Link>
              </div>

              <p className="max-w-sm mt-2 text-start text-gray-500 dark:text-gray-400">Join 31,000+ other and never miss out on new tips, tutorials, and more.</p>

              <div className="flex mt-6 -mx-2">
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1 lg:text-start text-center">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
              <div>
                <h3 className="text-white lg:text-gray-700 uppercase lg:text-lg text-xl bg-green-700 lg:bg-inherit dark:text-white">About</h3>
                <Link to='/' className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Company</Link>
                <Link to='/' className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">community</Link>
                <Link to='/' className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Careers</Link>
              </div>

              <div>
                <h3 className="text-white lg:text-gray-700 uppercase lg:text-lg text-xl bg-green-700 lg:bg-inherit dark:text-white">Blog</h3>
                <Link to='/' className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Tec</Link>
                <Link to='/' className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Music</Link>
                <Link to='/' className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Videos</Link>
              </div>

              <div>
                <h3 className="text-white lg:text-gray-700 uppercase lg:text-lg text-xl bg-green-700 lg:bg-inherit dark:text-white">Products</h3>
                <Link to='/' className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Mega cloud</Link>
                <Link to='/' className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Aperion UI</Link>
                <Link to='/' className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Meraki UI</Link>
              </div>

              <div>
                <h3 className="text-white lg:text-gray-700 uppercase lg:text-lg text-xl bg-green-700 lg:bg-inherit dark:text-white">Contact</h3>
                <span className="block mt-2 text-sm text-gray-600 py-1 dark:text-gray-400  hover:underline">+880-1959028008</span>
                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">dulonmolla88@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

        <div>
          <p className="text-center text-gray-500 dark:text-gray-400">© Brand 2020 - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;