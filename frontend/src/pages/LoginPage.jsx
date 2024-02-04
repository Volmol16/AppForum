import React from 'react'
import { Link } from 'react-router-dom' 

const LoginPage = () => {
  return (
    <div className='flex justify-center py-10'>
        <div className='py-16 px-3 bg-gray-500 rounded-lg max-w-xs'>
            <h1 className=' text-center'>Login</h1>
            <div className='space-y-5'>
                <input type="mail" placeholder='Введите почту' /> <br />
                <input type="password" placeholder='Введите пароль' />
            </div>
            <div className='space-x-2 pt-10 flex justify-center'>
            <button className='px-7 py-3 bg-gray-600 text-white rounded-lg'>Войти</button>
            </div>
            <div className='pt-10 flex justify-center'>
            <Link className='' to='/register'>Нет аккаунт?</Link>
            </div>
        </div>
    </div>
  )
}

export default LoginPage