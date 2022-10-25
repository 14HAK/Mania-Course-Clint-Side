import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../ContextApi/ContextApi';

const Home = () => {



  const { bela } = useContext(AuthContext)
  return (
    < div >


      {/* signin section  */}
      <div>
        <div className="w-full mt-10 max-w-sm p-6 m-auto mx-auto bg-slate-100 rounded-md shadow-md dark:bg-gray-800">

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

          <div className="flex items-center justify-between mt-4">
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

      {/* signup section  */}
      <div>
        <div className="w-full mt-5 max-w-sm p-6 m-auto mx-auto bg-slate-100 rounded-md shadow-md dark:bg-gray-800">

          <form className="mt-6">
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label htmlFor="username" className="block text-sm text-gray-800 dark:text-gray-200">User-Name</label>
              </div>
              <input type="text" name='username' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label htmlFor="photo" className="block text-sm text-gray-800 dark:text-gray-200">Photo-URL</label>
              </div>
              <input type="text" name='photo' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label htmlFor="email" className="block text-sm text-gray-800 dark:text-gray-200">Email</label>
              </div>
              <input type="email" name='email' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm text-gray-800 dark:text-gray-200">Password</label>
              </div>

              <input type="password" name='password' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>

            <div className="flex flex-col">
              <label className="inline-flex items-center mt-3">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-600" /><span className="ml-2 text-gray-700">Check our <Link to='/terms'><small className='underline cursor-pointer'>terms & conditions</small></Link></span>
              </label>
            </div>

            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-400"> Alrady Have An Account?
            <Link to='/signin' className="font-medium mx-1 underline text-gray-700 dark:text-gray-200 hover:underline">Sign In</Link></p>
        </div>
      </div>

      {/* footer  */}



    </div >
  );
};

export default Home;