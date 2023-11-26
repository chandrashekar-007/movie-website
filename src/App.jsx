import './App.css'
import { Routes, Route } from 'react-router-dom'
import MoviePage from './Components/MoviePage'
import SingleMovie from './Components/SingleMovie'
import ErrorPage from './Components/ErrorPage'
import ScrollTop from './Components/ScrollTop'

function App() {
 
  return (
    <>
        <Routes>
          <Route path="/" element={<MoviePage />} />
          <Route path="/movie/:id" element={<SingleMovie />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <ScrollTop/>
      
    </>
  )
}

export default App
