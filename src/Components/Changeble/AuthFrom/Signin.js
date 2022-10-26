import React from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <div>
      <div>
        <div className="w-full my-10 max-w-sm p-6 m-auto mx-auto bg-slate-100 rounded-md shadow-md dark:bg-gray-800">

          <form className="mt-6">
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label htmlFor="email" className="block text-sm text-gray-800 dark:text-gray-200">User-Email</label>

              </div>

              <input type="email" name='email' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm text-gray-800 dark:text-gray-200">Password</label>
                <Link to={''} className="text-xs text-gray-600 dark:text-gray-400 hover:underline">Forget Password?</Link>
              </div>

              <input type="password" name='password' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>

            <div className="mt-6">


              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Sign In
              </button>

            </div>
          </form>

          <div className="flex items-center justify-between ">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

            <Link to={''} className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
              or login with Social Media
            </Link>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
          </div>

          <p className="mt-8 text-xs font-light text-center text-gray-400"> Don't have an account?
            <Link to='/signup' className="font-medium mx-1 underline text-gray-700 dark:text-gray-200 hover:underline">Create One</Link></p>

        </div>
      </div>
    </div>
  );
};

export default Signin;