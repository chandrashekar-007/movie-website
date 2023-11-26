import React, { useEffect, useState } from 'react'
import {FaArrowUp} from 'react-icons/fa';
import './Scroll.css';

const ScrollTop = () => {

  const [show, setShow] = useState(false)
  const Scroll = () =>{
    window.scrollTo({top:0 , left: 0 , behavior:"smooth"});
  }
  const listenToScroll = ()=>{
    let heightToHidden = 300;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    winScroll > heightToHidden ? setShow(true) : setShow(false)
  }

  useEffect(() => {
    window.addEventListener("scroll",listenToScroll);  
    return () => {
      window.removeEventListener("scroll",listenToScroll);
    }
  }, [])

  return (
    <>
    {
      show && (
        <div className='arrow'>
          <FaArrowUp className='arrow-icon' onClick={Scroll}/>
        </div>
      )
    }
    </>
  )
}

export default ScrollTop
