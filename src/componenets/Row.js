import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Movie from './Movie'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
function Row({title,fetchURL,rowID}) {
    const [movies,setMovies] = useState([])

    useEffect(() => {
        axios.get(fetchURL).then((res) => {
            setMovies(res.data.results)
        })
    }, [fetchURL])
    
    const slideLeft = () =>{
        let slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = () =>{
        let slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft + 500
    }
  return (
    <div className='container mx-auto px-4'>

      <h2 className='text-white font-bold md:text-xl p-4 '>{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft onClick={slideLeft} size={40} className="bg-white rounded-full absolute opacity-80 hidden group-hover:block hover:opacity-100 cursor-pointer z-10"/>
        <div id={`slider`+ rowID} className='w-full h-full  overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
          {movies.map((item,id) => {
            return <Movie key={id} item={item}/>
          }

          )

          }
        </div>  
        <MdChevronRight onClick={slideRight} size={40} className="bg-white rounded-full absolute opacity-80  hidden group-hover:block hover:opacity-100 right-0 cursor-pointer z-10"/>
      </div>
      </div>
  )
}

export default Row