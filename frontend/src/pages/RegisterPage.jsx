import React from 'react'
import { Link } from 'react-router-dom' 

const RegisterPage = () => {
  return (
    <div className='flex justify-center py-10'>
        <div className='py-16 px-3 bg-gray-500 rounded-lg max-w-xs'>
            <h1 className=' text-center'>Register</h1>
            <div className='space-y-5'>
                <input type="mail" placeholder='Введите почту' /> <br />
                <input type="password" placeholder='Введите пароль' />
            </div>
            <div className='space-x-2 pt-10 flex justify-center'>
            <button className='px-7 py-3 bg-gray-600 text-white rounded-lg'>Зарегистрироваться</button>
            </div>
            <div className='pt-10'>
            <Link className='flex justify-center' to='/login'>Уже есть аккаунт?</Link>
            </div>
        </div>
    </div>
  )
}

export default RegisterPage