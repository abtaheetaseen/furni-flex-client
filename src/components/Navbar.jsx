import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import '../App.css';
import { AuthContext } from '../provider/AuthProvider';
import { AiOutlineShopping } from 'react-icons/ai';
import { CartContext } from '../cartfeature/ContextProvider';
import { totalItems } from '../cartfeature/CartReducer';

const Navbar = () => {

    const {user, logOut, name, photoURL} = useContext(AuthContext);

    const {cart} = useContext(CartContext);

  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/")

      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className='navbar z-10 shadow-sm px-4 mx-auto flex flex-col lg:flex-row md:flex-row'>
      <div className='flex-1'>
        <div className='flex gap-2 items-center'>
          <h1 className='text-black text-4xl font-bold mb-2'>
                Furni<span className='text-blue-600'>Flex</span>
            </h1>
        </div>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1 flex gap-3'>
          <NavLink to="/store">
            <li>
              <div>Home</div>
            </li>
          </NavLink>

          <NavLink to="/store">
            <li>
              <div>Products</div>
            </li>
          </NavLink>

          <NavLink to="/store">
            <li>
              <div>Categories</div>
            </li>
          </NavLink>

          {
            !user && (
              <NavLink to="/">
                <li>
                  <div>Login</div>
                </li>
              </NavLink>

            )
          }

          {
            user && (
              <Link to="/cart">
                    <li>
                      <button className='relative'>
                        <AiOutlineShopping className='text-[30px] text-blue-500' /> 
                        <div className='bg-blue-500 rounded-full  text-white absolute px-[7px] py-[2px] top-6 right-3'>{totalItems(cart)}</div>
                      </button>
                    </li>
                </Link>   
            )
          }
        </ul>

        {
          user && (
            <>
              <div className='dropdown dropdown-end z-50'>
                <div
                  tabIndex={0}
                  role='button'
                  className='btn btn-ghost btn-circle avatar'
                >
                  <div title={user?.displayName || name} className='w-10 rounded-full'>
                    <img
                      referrerPolicy='no-referrer'
                      alt='User Profile Photo'
                      src={user?.photoURL || photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 flex-col gap-3 text-black'
                >  

                  <li className=''>
              <button onClick={handleLogOut}>
                Logout
                </button>
            </li>
                </ul>
              </div>
              
            </>
          )
        }
      </div>
    </div>
  )
}

export default Navbar

