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
    <div className='flex space-x-5 justify-center'>
      {
        navLink.map((data, index) => (
          <header key={index}>
            <Link to={data.link}>{data.name}</Link>
          </header>
          )
        )
      }
      </div>
  )
}

export default HeaderPage