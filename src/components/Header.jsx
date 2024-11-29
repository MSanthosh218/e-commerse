import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ cartItemCount }) => {
  return (
    <div className='flex items-center justify-between bg-lightGray border-b-4 border-mintGreen text-darkGray p-4 shadow-lg fixed top-0 left-0 w-full z-50 '>
      <h2 className='text-2xl'>LOGO</h2>
      <div className='flex gap-14 items-center'>
        <Link to='/cart' className='relative'>
          Cart ({cartItemCount})
        </Link>
        <Link to='/login' className='w-20 h-8 px-3 py-1 rounded text-white bg-slate-900 items-center hover:bg-slate-500 active:scale-95'>Log-in</Link>
        <Link to='/signup' className='w-20 h-8 px-3 py-1 rounded text-white bg-slate-900 items-center hover:bg-slate-500 active:scale-95'>Sign-up</Link>
      </div>
    </div>
  );
};

export default Header