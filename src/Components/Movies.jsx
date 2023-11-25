import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import movieImg from "../assets/card_img1.png";
import { AppContext } from './context/Context';
import notFound from '../assets/not_found.svg';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({
  duration:500,
  offset: 80,
  easing:"ease"
});
// fade-up zoom-in


const Movies = () => {
  const { movieData ,error } = useContext(AppContext);

  if(error.show === "true"){
    return(
      <div className="center-2 column">
        <h4 className='text-center '>
          Sorry, movie you are looking for not found.
        </h4>
        <img src={notFound} height="400" width="900" alt="not found" />
      </div>
    )
  }

  return(
    <div className="grid">
    {
      movieData.map((movie) => {
        const { Poster, Title, imdbID } = movie;
        return (
          <NavLink to={`/movie/${imdbID}`} key={imdbID}>
            <div className='movie-container' 
            data-aos="zoom-in"
             >
              <div className="heading">
                <h2>{Title.length>=19? `${Title.slice(0,19)}...`:Title}</h2>
              </div>
              <div className="movie-image">
                <img src={Poster === "N/A" ?  movieImg : Poster } height="290" width="200" alt="movie-img" />
              </div>
            </div>
          </NavLink>
        )
        
      })
    }
    </div>
  )
}

export default Movies
