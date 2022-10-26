import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../ContextApi/ContextApi';

const Signup = () => {
  const [errorMsg, setErrorMsg] = useState()
  const [successMsg, setSuccessMsg] = useState(null)
  const { CreateNewUser, UpdateUserProfile, UserVarification, setLoading } = useContext(AuthContext)

  const handleSignupForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.username.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password.length !== 6) {
      setErrorMsg('Password should be 6 caracter.')
      return;
    }
    if (password !== confirmPassword) {
      setErrorMsg('Password not matched.')
      return;
    }

    CreateNewUser(email, password)
      .then(res => {
        const user = res.user;
        console.log(user);
        setSuccessMsg('Wellcome, Successfully Created Account.')
        callbackHandleUpdateProfile(name, photoURL)
        callbackVerifyUser()
        toast.success('welcome, Please check your email and must verify your account.')
        form.reset()
      })
      .catch(err => {
        setErrorMsg(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const callbackHandleUpdateProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL
    }
    UpdateUserProfile(profile)
      .then(() => { })
      .catch(() => { })
  }

  const callbackVerifyUser = () => {
    UserVarification()
      .then(() => { })
  }


  return (
    <div>
      <div className="w-full my-10 max-w-sm p-6 m-auto mx-auto bg-slate-100 rounded-md shadow-md dark:bg-gray-800">

        <form onSubmit={handleSignupForm} className="mt-6">
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label htmlFor="username" className="block text-sm text-gray-800 dark:text-gray-200">User-Name</label>
            </div>
            <input type="text" name='username' id='username' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label htmlFor="photo" className="block text-sm text-gray-800 dark:text-gray-200">Photo-URL</label>
            </div>
            <input type="text" name='photo' id='photo' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label htmlFor="email" className="block text-sm text-gray-800 dark:text-gray-200">Email</label>
            </div>
            <input type="email" name='email' required id='email' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm text-gray-800 dark:text-gray-200">Password</label>
            </div>

            <input type="password" name='password' id='password' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label htmlFor="confirmPassword" className="block text-sm text-gray-800 dark:text-gray-200">Confirm Password</label>
            </div>

            {
              successMsg ?
                <p className='py-1 text-xs text-green-600'>{successMsg}</p>
                :
                <p className='py-1 text-xs text-red-500'>{errorMsg}</p>
            }

            <input type="password" name='confirmPassword' id='confirmPassword' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
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
  );
};

export default Signup;