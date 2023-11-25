import React, { useContext } from 'react'
import Search from './Search'
import Movies from './Movies'
import { AppContext } from './context/Context'

const MoviePage = () => {
  const {loading} = useContext(AppContext)

  return (
    <div className="container">
      <Search />
      <Movies />
    </div>
  )
}

export default MoviePage

