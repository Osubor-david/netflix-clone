import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { useGlobalContext } from '../context/AuthContext'
import {AiOutlineMenu ,AiOutlineClose} from 'react-icons/ai'
function Navbar() {
  const {user,logOut} = useGlobalContext() 
  const [nav, setNav] = useState(false)
  const navigate = useNavigate()
 
  const handleClick = () => {
    setNav(!nav)
  }


  const handleLogout = async() =>{
    try {
      await logOut()
      navigate('/')
    } catch (error) {
      
    }
  }
 
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
        <Link to='/'><h1 className='text-red-600 mt-2  cursor-pointer pl-2 font-bold text-4xl'>NETFLIX</h1>
        </Link>
        {user?.email ? <div  >
            <Link to='/account'><button  className='text-white pr-4  px-6 py-4'>Account</button>
            </Link>
            <button onClick={handleLogout} className='bg-red-600 hidden sm:inline-block  px-6 py-2 rounded text-white'>Logout</button>
            <button onClick={handleLogout} className='text-red-600 mt-2 sm:hidden'>Logout</button>
        </div> :(
       <div className='hidden sm:block' >
       <Link to='/signin'><button  className='text-white pr-4   px-6 py-4'>Sign In</button>
       </Link>
      <Link to='signup'> <button className='bg-red-600  px-6 py-2 rounded text-white'>Sign Up</button>
      </Link>
   </div>)}
        {/* menu icon */}
        <div onClick={handleClick} className="mr-2 text-gray-300 block sm:hidden cursor-pointer z-30">
            {
            nav ?  <AiOutlineClose size={25}/> : <AiOutlineMenu className='text-white mt-1' size={25}/> }
        </div>
  
          {/* mobile menu */}
              <div 
           className={
            nav ? 'sm:hidden absolute top-0 left-0  flex flex-col w-full items-center justify-between h-screen bg-black text-gray-200 ease-in duration-300' :
             'sm:hidden  absolute left-[-100%] top-0  flex flex-col items-center justify-between text-gray-200 w-full h-screen bg-black ease-in duration-300 z-10'
      
          }
           >
            <ul className='w-full  mt-16 p-4'>
              <li onClick={handleClick} className='border-b py-6'>
                <Link to='/'>Home</Link>
              </li>
              <li className='border-b py-8' onClick={handleClick}>
                <Link to='/account'>Account</Link>
              </li>
              
              </ul>
              <div onClick={handleClick} className='flex flex-col pb-14  w-full p-4'>
                <Link to='/signin'>
                <button className='w-full my-2 p-3 bg-white text-black   rounded-2xl shadow-xl'>Sign In</button>
                </Link>
                <Link to='/signup'>
                <button className='w-full my-2 p-3 bg-red-600 rounded-2xl  shadow-lg'>Sign Up</button>
                </Link>
              </div>
          
    </div>
    </div>
  
  
  )
}

export default Navbar