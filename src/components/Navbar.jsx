import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/logo1.png"


function Navbar() {
    let [open,setOpen]= useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
        <div className='md:flex items-center justify-between bg-white py-4 md:px-7 px-7'>
            <div className='text-gray-800 hover:text-gray-400 duration-500 
            text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
               
                <Link to={"/"}>
                <img src={logo} className="App-logo  className=h-10 w-10" alt="logo" />
                </Link>
                
            </div>
            <div onClick={()=>setOpen (!open)} className='text-3xl absolute right-8 top-6 cursor pointer md:hidden'>
            <ion-icon name={open ? 'close':'menu'}></ion-icon>
            </div>
            <ul className={`md:flex md:items-center md:pb-0 
            pb-12 absolute md:static bg-white md:z-auto z-[0] 
            left-0 w-full md:w-auto md:pl-0 pl-9 
            transition-all duration-500 ease-in ${open ? 'top-20 opacity-100':'top-[-490px]'}`}>
                <li className='md:ml-8 text-xl md:my-0 my-7 text-gray-800 hover:text-gray-400 duration-500'>
                    <Link to={"/"}>Home</Link>
                </li>
                <li className='md:ml-8 text-xl md:my-0 my-7 text-gray-800 hover:text-gray-400 duration-500'>
                    <Link to={"/events"}>Events</Link>
                </li>
                <li className='md:ml-8 text-xl md:my-0 my-7 text-gray-800 hover:text-gray-400 duration-500'>
                    <Link to={"/about"}>About Us</Link>
                </li>
                <li className='md:ml-8 text-xl md:my-0 my-7 text-gray-800 hover:text-gray-400 duration-500'>
                    <Link to={"/faq"}>FAQs</Link>
                </li>
                <li className='md:ml-8 text-xl md:my-0 my-7 text-gray-800 hover:text-gray-400 duration-500'>
                    <Link to={"/contact"}>Contact Us</Link>
                </li>
                <li>
                    <Link to={"/login"}><button className='bg-blue-600 text-white font-[Poppins] py-2 px-6 rounded
                    md:ml-8 hover:bg-slate-500 duration-500'>Login / Signup</button></Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar