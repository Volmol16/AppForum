import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Articles from './pages/Articles';
import Notfoundpage from './pages/Notfoundpage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { Layout } from './components/Layout';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path='articles' element={<Articles />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='*' element={<Notfoundpage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App