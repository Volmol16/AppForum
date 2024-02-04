import React from 'react'
import { Link } from "react-router-dom"; 


const MenuLink = [
  {
    id: 1,
    name: "Login",
  },
  {
    id: 2,
    name: "Articles",
  },
  {
    id: 3,
    name: "Top questions",
  }
]

const Header = () => {
  return (
    <div className='flex justify-between items-center px-10 py-3 bg-black/90 drop-shadow'>
        <div className='flex items-center gap-10'>
            <h1 className='text-3xl text-white font-semibold'>AppForum</h1>
            <ul className='flex items-center gap-5'>
              {
                MenuLink.map((data, index) => (
                  <li key={index}>
                    <a href={data.link}
                    className=' text-white text-xl font-medium hover:text-sky-500'
                    >{data.name}</a>
                  </li>
                ))
              }
            </ul>
        </div>
        <div>
          <div className='space-x-5'>
            
            <button className='text-white text-lg font-semibold'>Register</button>
          </div>
        </div>
    </div>
  )
}

export default Header