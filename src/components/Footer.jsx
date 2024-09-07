import React from 'react'
import { FaFacebook, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <footer class="bg-black text-white py-10">
    <div class="container mx-auto px-4 md:flex justify-around">
        <div class="flex items-center md:items-start justify-center mb-10 md:mb-0">
        <h1 className='text-white text-4xl font-bold mb-2'>
                Furni<span className='text-blue-600'>Flex</span>
            </h1>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-10">

            <div>
                <h4 class="text-lg font-semibold mb-4">About US</h4>
                <ul>
                    <li><a href="#" class="text-gray-400 hover:text-white block mb-2">Master Plan</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white block mb-2">Jobs</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white block mb-2">Invest</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white block mb-2">Pressroom</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white block mb-2">Blog</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white block mb-2">Contact</a></li>
                </ul>
            </div>

            <div>
                <h4 class="text-lg font-semibold mb-4">Explore EEVE</h4>
                <ul>
                    <li><a href="#" class="text-gray-400 hover:text-white block mb-2">Unlock my Robot Power</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white block mb-2">Starlight</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white block mb-2">Robot Platform</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white block mb-2">EEVE Roadmap</a></li>
                </ul>
            </div>

            <div>
                <h4 class="text-lg font-semibold mb-4">Community & Support</h4>
                <ul>
                    <li><a href="#" class="text-gray-400 hover:text-white block mb-2">Willow X Community</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white block mb-2">Developer & Maker Access</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white block mb-2">Special Cases</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div class="border-t border-gray-700 mt-10 pt-6">
        <div class="container mx-auto px-4 md:flex justify-between items-center">

            <div class="flex space-x-4 mb-4 md:mb-0">
            <FaFacebook className='text-xl text white' />
            <FaInstagramSquare className='text-xl text white' />
            <FaLinkedin className='text-xl text white' />
            </div>

            <div class="flex space-x-6">
                <a href="#" class="text-gray-400 hover:text-white">March22 Recap</a>
                <a href="#" class="text-gray-400 hover:text-white">Privacy Policy</a>
                <a href="#" class="text-gray-400 hover:text-white">General Terms</a>
                <a href="#" class="text-gray-400 hover:text-white">Contact</a>
            </div>
        </div>

        <p class="text-center text-gray-500 mt-4">EEVE © 2024. All rights reserved.</p>
    </div>
</footer>
    </div>
  )
}

export default Footer
