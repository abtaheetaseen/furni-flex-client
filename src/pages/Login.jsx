import React, { useContext } from 'react'
import "../App.css"
import icon from "../assets/images/icon.png"
import { Link, useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { AuthContext } from '../provider/AuthProvider'
import toast from 'react-hot-toast'

const Login = () => {

    const {signInUser, loading, setLoading} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
        .then((result) => {
            form.reset();
            toast.success("User logged in successfully")
            navigate("/store");
            console.log(result.user);
        })
        .catch((error) => {
            toast.error(error.message)
        })
    }

  return (
    <div className='min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>

    {/* login part */}
      <div className='bg-white p-24'>
      
    <div className="container flex items-center justify-center mx-auto p-6 bg-[#f4f4f4]">
        <form onSubmit={handleSignIn} className="w-full max-w-md">

            <h1 className="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white">Welcome Back!</h1>
            <p className='mt-2 text-[16px]'>
            Enter your Credentials to access your account
            </p>

            <div className="relative flex items-center mt-8">
                <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </span>

                <input type="email" name='email' className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
            </div>

            <div className="relative flex items-center mt-4">
                <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </span>

                <input required type="password"name='password' className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />
                <span className='absolute right-5'>
                    {
                        <FaEyeSlash />
                    }
                </span>
            </div>

            <div className='text-right'>
            <a href="#" className="text-xs text-blue-600">Forget Password?</a>
            </div>

            <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="agreeToTerms"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              required
            />
            <label className="ml-2 text-sm text-gray-700">
              I agree to the <a href="#" className="text-blue-500">Terms & Policy</a>
            </label>
          </div>

            <div className="mt-6">
                <input className="cursor-pointer w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#000000] rounded-lg" type="submit" value="Sign In" />
                

                <div className="text-center my-4">or</div>

                <div className="flex space-x-4">
            <button
              type="button"
              className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md hover:bg-gray-100">
              <img
                src="https://img.icons8.com/color/24/google-logo.png"
                alt="Google logo"
                className="mr-2"
              />
              Sign in with Google
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md hover:bg-gray-100">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="Apple logo"
                className="mr-2 w-5"
              />
              Sign in with Apple
            </button>
          </div>

          <p className="text-center mt-6">
            Don't have an account? <Link to="/signup" className="text-blue-500">Sign Up</Link>
          </p>
            </div>
        </form>
    </div>
      </div>

        {/* banner */}
      <div className='banner-bg flex items-center justify-center min-h-screen'>
        <div className='text-center'>
            <div className='flex items-center justify-center mb-2'>
            <img src={icon} alt="" className='w-[50px]' />
            </div>
            <h1 className='text-white text-3xl font-bold mb-2'>
                Furni<span className='text-blue-600'>Flex</span>
            </h1>
            <p className='text-[#C8C4C4]'>
            Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring 
            </p>
        </div>
      </div>
    </div>
  )
}

export default Login
