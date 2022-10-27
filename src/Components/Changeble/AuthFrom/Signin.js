import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { BsGithub, BsGoogle } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../ContextApi/ContextApi';

const Signin = () => {
  const { SigninUser, setLoading, GoogleSignin, GithubSignin } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/';

  const handleSignin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    SigninUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        if (user.emailVerified) {
          toast.success('Successfully Signin.');
          navigate(from, { replace: true })
        } else {
          toast.error('Please Verify Your Account.');
        }
        form.reset()
      })
      .catch((error) => {
        toast.error('Wrong Password!');
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const handleGoogle = () => {
    GoogleSignin()
      .then((res) => {
        toast.success('Google signin successfull')
        navigate(from, { replace: true })
      })
      .catch(err => {
        toast.error('Signin faild, Try again.')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const handleGithub = () => {
    GithubSignin()
      .then(res => {
        const user = res.user;
        console.log(user);
        toast.success('Github signin successfull')
        navigate(from, { replace: true })
      })
      .catch(err => {
        toast.error('Signin faild, Try again.')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div>
      <div>
        <div className="w-full my-10 max-w-sm p-6 m-auto mx-auto bg-slate-100 rounded-md shadow-md dark:bg-gray-800">

          <form onSubmit={handleSignin} className="mt-6">
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label htmlFor="email" className="block text-sm text-gray-800 dark:text-gray-200">User-Email</label>

              </div>

              <input type="email" name='email' id='email' required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm text-gray-800 dark:text-gray-200">Password</label>
                <Link to={''} className="text-xs text-gray-600 dark:text-gray-400 hover:underline">Forget Password?</Link>
              </div>

              <input type="password" name='password' id='password' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>

            <div className="mt-6">


              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Sign In
              </button>

            </div>
          </form>

          <div className="flex items-center justify-between ">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

            <Link className="text-xs mt-2 text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
              or login with Social Media
            </Link>
            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
          </div>

          <div className='flex justify-between items-center'>
            <button onClick={handleGoogle} className="w-[49%] flex justify-center items-center mt-2 px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none">
              <BsGoogle className='mr-2'></BsGoogle> Google
            </button>

            <button onClick={handleGithub} className="w-[49%] flex justify-center items-center mt-2 px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-slate-700 rounded-md hover:bg-slate-600 focus:outline-none">
              <BsGithub className='mr-2'></BsGithub> Github
            </button>
          </div>

          <p className="mt-8 text-xs font-light text-center text-gray-400"> Don't have an account?
            <Link to='/signup' className="font-medium mx-1 underline text-gray-700 dark:text-gray-200 hover:underline">Create One</Link></p>

        </div>
      </div>
    </div>
  );
};

export default Signin;