import React from 'react'
import { UserAuth } from '../Context/AuthContext'
import { Link, useNavigate} from 'react-router-dom'


const Nav = () => {
  const navigate = useNavigate();

  const { user, logOut } = UserAuth();
  

 const handleLogout = async () => {
  try {
    await logOut();
    navigate('/login');
  } catch (error) {
    console.error(error);
  }
};

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to ='/'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>
        NETFLIX
      </h1>
      </Link>

      <div className="hidden md:inline space-x-6 lg:space-x-20">
                <a href="#" className='text-white  hover:underline hover:text-red-500'>
                Home
                </a> 
                <a href="#" className="text-white  hover:underline hover:text-red-500">
                TV Shows
                </a>
                <a href="#" className="text-white  hover:underline hover:text-red-500">
                Movies
                </a>
                <a href="#" className="text-white  hover:underline hover:text-red-500">
                New & Popular
                </a>
                <a href="#" className="text-white  hover:underline hover:text-red-500">
                My List
                </a>
            </div>
            
            {user?.email ? (
              <div>
              <Link to='/account'>
              <button className='text-white pr-4'>Account</button>
              </Link>
              <button onClick={handleLogout} className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Logout</button>
            </div>
            ) :(
              <div>
              <Link to='/login'>
              <button className='text-white pr-4'>sign in</button>
              </Link>
              <Link to='/signup'>
              <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>sign up</button>
              </Link>
            </div>
            )}
    </div>
  )
}

export default Nav
