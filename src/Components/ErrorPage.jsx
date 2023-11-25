import React, { useContext } from 'react'
// import { AppContext } from './context/Context'
import errorImg from '../assets/404.svg'

const ErrorPage = () => {
  // const {error} = useContext(AppContext);
  return (
    <div className="center">
     <img src={errorImg} height="300" alt="error-page-logo" />
    </div>
  )
}

export default ErrorPage
