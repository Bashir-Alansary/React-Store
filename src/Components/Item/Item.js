import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { DiGitCompare } from "react-icons/di";
import { FiHeart } from "react-icons/fi";
import { FaHeart, FaDollarSign } from "react-icons/fa";
import { MdDoneOutline } from "react-icons/md";
import { AiOutlineReload } from "react-icons/ai";
import "./Item.css"
import { useShopContext } from '../../Context/ShopContext';

export default function Item({id, img, name, oldPrice, newPrice, desc, itemClass}) {
  const{
    increaseItemAmount, 
    setAddedMsg, 
    setDisabledBtn, 
    addToWishlist, 
    wishlist, 
    compareList, 
    addToCompareList,
    setShowSubCart, 
  } = useShopContext();

  const[wishLoad, setWishLoad] = useState(false);
  const[compareLoad, setCompareLoad] = useState(false);
  const[addLoad, setAddLoad] = useState(false);

  const linkClick = () => {
    window.scrollTo(0,0);
    setAddedMsg({text: "10 in stock", class: "msg done", availablity: true});
    setDisabledBtn(false);
  }

  const addToWishBtn = (id) => {
    setWishLoad(true);
    setTimeout(function() {
      addToWishlist(id);
      setWishLoad(false);
    }, 1000);
  }

  const addToCompareBtn = (id) => {
    setCompareLoad(true);
    setTimeout(function() {
      addToCompareList(id);
      setCompareLoad(false);
    }, 1000);
  }

  const addToCartBtn = (id) => {
    setAddLoad(true);
    setTimeout(function() {
      increaseItemAmount(id);
      setShowSubCart(true);
      setAddLoad(false);
    }, 1000);
  }

  return (
    <div className={itemClass}>
      <div className='item-div'>
        <div className='content'>
          <Link className='imgbx link' to={"/product/"+ id}  onClick={linkClick}>
            <img src={img} />
          </Link>
          <div className='item-details'>
            <div className='text'>
              <Link className='link' to={"/product/"+ id}  onClick={linkClick}>
                <h3>{name}</h3>
              </Link>
              <div className='price'>
                <span className='new-price'>&#0036;{newPrice}</span>
                <span className='old-price'>&#0036;{oldPrice}</span>
              </div>
              <p className='description'>{desc}</p>
            </div>
            <div className='interact'>
              <div className='item-icons compare-btn'>
                <span className='icon-name'>
                  {compareList[id] === "compare" ? "it is in compare" : "Add to compare"}
                </span>
                {compareList[id] === "compare"? <Link to="/compare" className="link icon-btn"><MdDoneOutline/> </Link>
                :<button onClick={()=>{addToCompareBtn(id)}} className='icon-btn'>
                  {compareLoad? <AiOutlineReload className='load'/> : <DiGitCompare />}
                </button>}
              </div>
              <div className='item-icons wishlist-btn'>
                <span className='icon-name'>
                  {wishlist[id] === "favorite"? "it is in wishlist" : "Add to wishlist"}
                </span>
                {wishlist[id] === "favorite"? <Link to="/wishlist" className="link icon-btn"><FaHeart /> </Link>
                :<button onClick={()=>{addToWishBtn(id)}} className='icon-btn'>
                  {wishLoad? <AiOutlineReload className='load'/> : <FiHeart />}
                </button>}
              </div>
            </div>

            <div className="main-btn">
              <button 
              className={addLoad ?  'special-btn disabled' : 'special-btn' }
              disabled = {addLoad? true : false} 
              onClick={()=>addToCartBtn(id)}
              >
              {addLoad ? <AiOutlineReload className='load' /> : 'Add to cart'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
