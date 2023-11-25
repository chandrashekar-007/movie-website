import { createContext, useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import {ThreeDots} from "react-loader-spinner"
import {ProgressBar} from "react-loader-spinner"

import axios from 'axios'

const AppContext = createContext();

const AppProvider =({children})=>{

    const [error, setError] = useState({show:"false", msg:""})
    const [loading, setLoading] = useState(true)
    const [movieData, setMovieData] = useState([])
    const [category, setCategory] = useState("twilight")

  
    //  const API = `http://www.omdbapi.com/?apikey=2e49b834&i=tt0120338`
     const API = `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}`
  
    const getMovie = async (url) => {
      try {
        const res = await axios.get(url);
        if (res.data.Response === "True") {
          setMovieData(res.data.Search);
          setLoading(false)
            setError({show:"false",msg:""})
          }
          else{
            setError({show:"true",msg:res.data.Error})
          }
        } catch (error) {
        console.log(error)
      }
    }
    console.log(movieData)
  
    useEffect(() => {
      //debounce function
      const timer = setTimeout(() => {
        getMovie(`${API}&s=${category}`);
      }, 2000);
      // cleanup function
      return ()=>clearTimeout(timer)
    }, [category])
  
    // console.log(category)
    
    if(loading){
      return(
        <div className="spinner center">
          <span>
            <ProgressBar
              height="80"
              width="100"
              ariaLabel="progress-bar-loading"
              wrapperStyle={{}}
              wrapperClass="progress-bar-wrapper"
              borderColor = '#F4442E'
              barColor = '#0d1c57'
            />
          </span>
          <span className="text">Hang on... Loading content...</span>
        </div>
      )
    }
  
    return (
        <AppContext.Provider value={{error,setError,movieData,loading,setLoading,category,setCategory ,getMovie,API}}>
            {children}
        </AppContext.Provider>
    )
}

export { AppProvider , AppContext }















