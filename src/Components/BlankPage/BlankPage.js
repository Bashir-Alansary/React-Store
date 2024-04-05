import React from 'react'
import { Link } from 'react-router-dom'
import "./BlankPage.css"

export default function BlankPage({name, img}) {
  return (
    <div className='blank'>
        <img src={img} />
        <h2>Your {name} is empty</h2>
        <div className='main-btn'>
            <Link className='link special-btn' to="/shop" onClick={()=>window.scroll(0,0)}>continue shopping</Link>
        </div>
        <h2>Have an account?</h2>
        <div className='blank-login'>
            <Link to="/login" onClick={()=>window.scroll(0,0)}>login</Link>
            <span> to check out faster.</span>
        </div>
    </div>
  )
}
