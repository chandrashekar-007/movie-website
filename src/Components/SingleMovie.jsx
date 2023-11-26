import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import movieImg from "../assets/card_img1.png";
import { AppContext } from "./context/Context";
import {ProgressBar} from "react-loader-spinner"

const SingleMovie = () => {
  const { id } = useParams();
  const [singleData, setSingleData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { API,setError } = useContext(AppContext);

  const {
    Title,
    Released,
    Runtime,
    Genre,
    imdbRating,
    Poster
  } = singleData;

  const getSingleMovie = async (url) => {
    try {
      const res = await axios.get(url);
      if (res.data.Response === "True") {
        setSingleData(res.data);
        setLoading(false);
        setError({show:"false",msg:""})     
      } else {
        setError({show:"true",msg:res.data.Error})
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(
    () => {
      const timer = setTimeout(() => {
        getSingleMovie(`${API}&i=${id}`);
      }, 2000);
      return ()=>clearInterval(timer)
    },
    [id]
  );

  console.log(singleData);

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
        <span className="text">Fetching movie data...</span>
      </div>
    )
  }

  return (
    <div className="single-movie-container">
      <div className="movie-image">
        <img src={Poster === "N/A" ?  movieImg : Poster } height="280" width="220" alt="movie-img" />
      </div>
      <div className="description">
        <h2>
          {Title}
        </h2>
        <div className="details">
          <h4>
            {Released === "N/A" ? "19 sept 2006":Released}
          </h4>
          <h4>
            {Runtime === "N/A" ? "1hr 26 min":Runtime}
          </h4>
          <h4>
            {Genre === "N/A" ? "Action , Drama":Genre}
          </h4>
          <h4>
            {imdbRating === "N/A" ? "19 sept 2006":imdbRating}
          </h4>
        </div>
        <NavLink to="/" className="button">
          <h3>Back To Home</h3>
        </NavLink>
      </div>
    </div>
  );
};

export default SingleMovie;
