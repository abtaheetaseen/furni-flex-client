import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import MainLayout from '../components/layouts/MainLayout'
import Store from '../pages/Store'
import Cart from '../pages/Cart'

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/store",
                element: <Store />
            },
            {
                path: "/cart",
                element: <Cart />
            },
        ]
    }
])
