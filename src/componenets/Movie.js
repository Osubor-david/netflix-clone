import React,{useState} from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useGlobalContext } from '../context/AuthContext';
import {db} from '../firebase'
import  {arrayUnion,doc, updateDoc} from 'firebase/firestore'
function Movie({item}) {
     const [like,setLike] = useState(false)
     const {user} = useGlobalContext()
     const [saved,setSaved] = useState(false)

     const movieID = doc(db, 'users', `${user?.email}`)

     const saveMovie = async() =>{
        if (user?.email) {
            setLike(!like)
            setSaved(true)
            await updateDoc(movieID, {
                savedShows: arrayUnion({
                    id:item.id,
                    title:item.title,
                    img: item.backdrop_path

                })
            })
        }
        else{
            alert('please log in to save a movie ')
        }
     }
  return (

<div  className='w-[180px] md:w-[240px] lg:w-[280px]   inline-block cursor-pointer relative p-2'>
                <img className='w-full h-auto   block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
                <div className='absolute top-0 left-0   hover:opacity-100 w-full h-full hover:bg-black/80 opacity-0 text-white'>
                    <small className='whitespace-normal p-3    text-xs mx-auto md:text:sm font-bold flex justify-center items-center  h-full  text-center'>{item?.title}</small>
                <p onClick={saveMovie}>
                    {like? <FaHeart   className='absolute left-4 top-4   text-red-600'/> : <FaRegHeart  className='absolute left-4 top-4 text-gray-300'/>}
                </p>
                </div>
            </div>
  )
}

export default Movie