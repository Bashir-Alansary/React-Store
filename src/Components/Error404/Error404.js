import React from 'react'
import error404 from "../Assets/images/error404.png"
import { Link } from 'react-router-dom'
import "./Error404.css"

export default function Error404() {
    return (
        <div className='error404'>
            <div className='content'>
                <img src={error404} />
                <h2>Oops! Page Not Found.</h2>
                <div className='main-btn'>
                    <Link className='link special-btn' to="/">Go to Home</Link>
                </div>
            </div>
        </div>
    )
}