import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useShopContext } from '../../Context/ShopContext';
import SubCart from '../SubCart/SubCart';
import { FiPlus, FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineAlignRight } from "react-icons/ai";
import TemplatesList from '../TemplatesList/TemplatesList';
import SubSearch from '../SubSearch/SubSearch';
import wishlist from "../Assets/images/wishlist.png"
import logo from "../Assets/images/logo.png"
import cartImg from "../Assets/images/cart.png"
import "./Navbar.css";

export default function Navbar() {
    
    const {getCartAmount, setShowSubCart, scrollNav, navHeight} = useShopContext();
    const [showTemplates, setShowTemplates] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [togglebtn, setToggleBtn] = useState(false);

    const hideMobileMenu = () => {
        setToggleBtn(false);
    }

    const handleToggleBtn = () => {
        if (togglebtn) {
            setToggleBtn(false);
            setShowTemplates(false);
            console.log(showTemplates);
        } else {
            setToggleBtn(true);
        }
    }

  return (
    <div className={scrollNav? 'navbar active' : 'navbar'} style={{height : navHeight}}>
        <div className='container'>
            <div className='logo'>
                <img src={logo} />
            </div>
            <div className={togglebtn? 'main-links show' : 'main-links hide'}>
                <ul className='links'>
                    <li><NavLink className="link" onClick={hideMobileMenu} to="/" activeClassName = "active" >Home</NavLink></li>
                    <li><NavLink className="link" onClick={hideMobileMenu} to="men">Men</NavLink></li>
                    <li><NavLink className="link" onClick={hideMobileMenu} to="women">Women</NavLink></li>
                    <li><NavLink className="link" onClick={hideMobileMenu} to="kids">Kids</NavLink></li>
                    <li><NavLink className="link" onClick={hideMobileMenu} to="shop">Shop</NavLink></li>
                </ul>
                <div className='tamplates-link' onMouseEnter={()=>setShowTemplates(true)} onMouseLeave={()=>setShowTemplates(false)}>
                    <div className='btn-content'>
                        <button>
                            <span>tamplates</span>
                            <FiPlus className='templates-icon'/>
                        </button>
                    </div>
                    <TemplatesList showTemplates = {showTemplates} hideMobileMenu={hideMobileMenu} />
                </div>
                <div className='tamplates-link for-mobile' onClick={()=>setShowTemplates(!showTemplates)}>
                    <div className='btn-content'>
                        <button className={showTemplates? 'active' : null}>
                            <span>tamplates</span>
                            <FiPlus className='templates-icon'/>
                        </button>
                    </div>
                    <TemplatesList showTemplates = {showTemplates} hideMobileMenu={hideMobileMenu} togglebtn = {togglebtn} />
                </div>
            </div>
            <div className='login-cart'>
                <div className='search-content'>
                    {!showSearch && <button className="special-link" onClick={()=> setShowSearch(true)}>
                        <FiSearch className='icon' />
                    </button>}
                    <SubSearch showSearch={showSearch} setShowSearch={setShowSearch} />
                </div>
                <NavLink className="link special-link wish" to="wishlist"><img src={wishlist} /></NavLink>
                <NavLink className="link special-link" to="login"><AiOutlineUser className='icon' /></NavLink>
                <div className='cart-btn'>
                    <button onClick={()=>setShowSubCart(true)}>
                        <img src={cartImg} />
                        <span className='count'>{getCartAmount()}</span>
                    </button>
                    <SubCart />
                </div>
            </div>
            <button className='toggle' onClick={handleToggleBtn}>
                <span className={togglebtn? 'short active' : 'short'}></span>
                <span className={togglebtn? 'long active' : 'long'}></span>
            </button>
        </div>
    </div>
  )
}
