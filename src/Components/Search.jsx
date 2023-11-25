import React, { useContext } from 'react'
import { AppContext } from './context/Context'

const Search = () => {
  const {category,setCategory,error} = useContext(AppContext);

  return (
    <div className='search-container'>
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <h3>Search your favourite movies here</h3>
        <div className="search-bar">
          <input type="text" placeholder='Enter movie name' value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>
      </form>
      <p>{error.show === "true" ? error.msg : ""}</p>
      <hr />
    </div>
  )
}

export default Search
