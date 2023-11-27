import React, { useContext, useEffect } from 'react'
import Search from './Search'
import Movies from './Movies'
import { AppContext } from './context/Context'

const MoviePage = () => {
  useEffect(() => {
    document.title = `SK Movies | Search you favourites here`
  }, [])

  return (
    <div className="container">
      <Search />
      <Movies />
    </div>
  )
}

export default MoviePage

