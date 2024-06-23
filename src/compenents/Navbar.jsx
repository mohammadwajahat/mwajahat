import React, { useState } from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaYoutube} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/muhammadwajahat.png'
// import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => { 
    setNav (!nav) 
  }
  return(
      <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 text-sm'>
          <div >
              <a href="/"><img className='cursor-pointer' src={Logo} alt="Logo Image" style={{width: '110px'}}/></a>
          </div>

          {/* menu */}
         
        <ul className='hidden md:flex'>
            <li className='py-3 px-6 rounded'>
                <a href="/">Home</a>
            </li>
            <li className='py-3 px-6 rounded'>
           
                <a href="/about">About</a>
            </li>
            <li className='py-3 px-6 rounded'>
              
                <a href="/skills">Skills</a>
            </li>
            <li className='py-3 px-6 rounded'>
               
                <a href="/portfolio">Portfolio</a>
            </li>
        
            <li className='py-3 px-6 rounded'>
            
                <a href="/contact">Contact Us</a>
            </li>
        </ul >
      

          {/* Hamburger */}

          <div onClick={handleClick} className='md:hidden z-10 text-4xl cursor-pointer'>
          {!nav ? <FaBars /> : <FaTimes />}
          </div>

         { /* Mobile menu */}

          <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-2xl'>
            <a href="/">Home</a>
            </li>
            <li className='py-6 text-2xl'>
            <a href="/about">About</a>
            </li>
            <li className='py-6 text-2xl'>
            <a href="/skills">Skills</a>
            </li>
            <li className='py-6 text-2xl'>
            <a href="/portfolio">Portfolio</a>
            </li>
        
            <li className='py-6 text-2xl'>
            <a href="/contact">Contact Us</a>
            </li>
          </ul>

          {/* Social Icons */}

          <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-blue-600'>
                <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/muhammad-wajahat-tareen-b6898311b/" target='_blank'>
                 Linkedin <FaLinkedin size={30} />
                 </a>
                </li>

                <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#333333]'>
                <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/mohammadwajahat" target='_blank'>
                 Github <FaGithub size={30} />
                 </a>
                </li>

                <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#FF0000]'>
                <a className='flex justify-between items-center w-full text-gray-300' href="https://www.youtube.com/@codewithwajahat" target='_blank'>
                 YouTube <FaYoutube size={30} />
                 </a>
                </li>

                <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#565f69]'>
                <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/mohammadwajahat/resume" target='_blank'>
                 Resume <BsFillPersonLinesFill size={30} />
                 </a>
                </li>
              
                
            </ul>
          </div>
          
      </div>
  )
}

export default Navbar;