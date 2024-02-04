import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import HeaderPage from '../pages/HeaderPage';
import FooterPage from '../pages/FooterPage';

const Layout = () => {
  return (
    <>
    <HeaderPage />
    <Outlet />
    <FooterPage />
    </>
  )
}

export {Layout}