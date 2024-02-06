import React from 'react'
import {Link } from 'react-router-dom';

const navLink = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "Articles",
    link: "articles"
  },
  {
    name: "Login",
    link: "login"
  }
]

const HeaderPage = () => {
  return (
    <div className='bg-[#010409]'>
        <div className='flex space-x-5 justify-center py-2'>
      {
        navLink.map((data, index) => (
          <header key={index}>
            <Link className='text-white font-xl font-medium' to={data.link}>{data.name}</Link>
          </header>
          )
        )
      }
      </div>
    </div>
    
  )
}

export default HeaderPage