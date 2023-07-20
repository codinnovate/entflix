import React, { useState} from 'react'
import { Link } from 'react-router-dom';
import {  menu, close } from '../assets';




const Header = () => {
  const [active, setActive ] = useState("")
    const [toggle, setToggle] = useState(false)
    const navLinks = [
        {
            title: 'Series',
            path:'/series'
        },
        {
            title: 'Tvshows',
            path: '/tvshows'
        },
        {
            title: 'Movie',
            path: '/movie'
        },
    ]
  return (
    <nav
      className='sm:px-16 px-6 w-full bg-[#19161f] flex items-center py-5 z-20 '>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <div className=''>
          <h1 className='text-red-600 font-bold text-3xl'>ENTFLIX</h1>
          </div>
         
        </Link>
        <ul className='list-none hidden   sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li key={link.id}
            className={`${
              active === link.title ? "text-white":"text-[#605f65]"
            } hover:text-white text-[18px] font-medium cursor-pointer `}
            onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-[#19161f] absolute top-20 right-0 mx-4 my-2 z-10 rounded-xl min-w-[140px]   `}>
          <ul className='list-none flex justify-end items-start flex-col gap-4'>
          {navLinks.map((link) => (
            <li key={link.id}
            className={`${
              active === link.title
              ? "text-white"
              : "text-[#605f65]"
              }
              text-[16px] font-medium cursor-pointer font-poppins `}
              onClick={() => {
                  setActive(link.title)
                  setToggle(!toggle)
              }
              }
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header