import React, { useEffect, useRef, useState } from 'react'
import { BsArrowUp } from "react-icons/bs";
import "./ScrollToUp.css"
import { useShopContext } from '../../Context/ShopContext';

export default function ScrollToUp() {
    const {setScrollNav} = useShopContext();
    const progressRef = useRef(null);
    const[showScroll, setShowScroll] = useState(false);

    window.addEventListener('scroll', function() {
        const myDocument = document.documentElement;
        const scrollTop = myDocument.scrollTop;
        if (scrollTop > 200) {
            setShowScroll(true);
            const pageScroll = myDocument.scrollHeight - myDocument.clientHeight;
            let scrollVal = (scrollTop / pageScroll) * 100;
            console.log(scrollVal);
            progressRef.current.style.background = `conic-gradient(rebeccapurple ${scrollVal}%, transparent 0)`

        } else {
            setShowScroll(false);
        }

        // to set active navbar
        if (scrollTop > 70) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    })

  return (
    <button 
    className={showScroll? 'scroll show' : 'scroll hide'}
    onClick={()=>window.scroll(0,0)}
    >
        <span className='scroll-progress' ref = {progressRef}></span>
        <span className='icon'><BsArrowUp /></span>
    </button>
  )
}
