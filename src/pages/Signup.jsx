import React, { useContext } from 'react'
import { FaEyeSlash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import "../App.css"
import icon from "../assets/images/icon.png"
import { AuthContext } from '../provider/AuthProvider'
import toast from 'react-hot-toast'
import useAxiosPublic from '../hooks/useAxiosPublic'

const Signup = () => {

    const {createUser, updateUserProfile, setLoading, loading} = useContext(AuthContext);
    const navigate = useNavigate();

    const axiosPublic = useAxiosPublic();

    const handleSignUp = async (e) => {
        e.preventDefault();
        const form = e.target;

        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        try {

            // register user
            const result = await createUser(email, password);
            console.log(result);

            // update profile
            await updateUserProfile(firstName, photoURL);

            // send user to mongodb
            const user = {
                firstName,
                lastName,
                email,
                photoURL,
                role: "user"
            }

            const res = await axiosPublic.post("/users", user)
            if(res.data.insertedId){
                console.log(res.data);
                form.reset();
                toast.success("User created successfully")
                navigate("/store");
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }

    }

  return (
    <div className='min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>

    {/* login part */}
      <div className='bg-white p-24'>
      
    <div className="container flex items-center justify-center mx-auto p-6 bg-[#f4f4f4]">
        <form onSubmit={handleSignUp} className="w-full max-w-md">

        <div className='text-center'>
            <h1 className="mt-3 text-xl font-semibold text-gray-800 capitalize dark:text-white">Welcome To</h1>
            <h1 className='text-black text-4xl font-bold mb-2'>
                Furni<span className='text-blue-600'>Flex</span>
            </h1>
            <p className='mt-2 text-[16px]'>
            Signup for purchase your desire products
            </p>
        </div>

        {/* first name/ last name */}
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2'>

        <div className="relative flex items-center mt-8">
                <input type="text" name='firstName' className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="First Name(optional)" />
            </div>

            <div className="relative flex items-center">
                <input type="text" name='lastName' className="block mt-0 md:mt-8 lg:mt-8 w-full py-3 text-gray-700 bg-white border rounded-lg px-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Last Name(optional)" />
            </div>

        </div>

        <div className="relative flex items-center mt-4">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                            </svg>




                        </span>

                        <input type="text" name='photoURL' className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Photo URL"/>
                    </div>

            <div className="relative flex items-center mt-4">
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
                <input className="cursor-pointer w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#000000] rounded-lg" type="submit" value="Sign Up" />
                

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
            Already have an account? <Link to="/" className="text-blue-500">Log In</Link>
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

export default Signup
