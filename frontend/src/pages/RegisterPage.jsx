import React from 'react'
import { Link } from 'react-router-dom' 

const RegisterPage = () => {
  return (
    <div className='flex justify-center py-10'>
        <div className='py-16 px-3 bg-[#161b21] rounded-lg max-w-xs'>
            <h1 className=' text-center font-bold text-2xl text-sky-500'>Register</h1>
            <div className='space-y-5 pt-5'>
                <input className='text-center text-white font-medium rounded-lg bg-[#232a32] py-2' type="mail" placeholder='Введите ник' />
                <input className='text-center text-white font-medium rounded-lg bg-[#232a32] py-2' type="mail" placeholder='Введите почту' />
                <input className='text-center text-white font-medium rounded-lg bg-[#232a32] py-2' type="password" placeholder='Введите пароль' />
            </div>
            <div className='space-x-2 pt-10 flex justify-center'>
            <button className='px-10 py-3 bg-[#232a32] text-white text-xl font-bold rounded-lg duration-150 hover:bg-[#1b2127]'>Зарегистрироваться</button>
            </div>
            <div className='pt-10 flex justify-center'>
            <Link className='text-lg font-bold text-white duration-150 hover:text-sky-500' to='/login'>Уже есть аккаунт?</Link>
            </div>
        </div>
    </div>
  )
}

export default RegisterPage