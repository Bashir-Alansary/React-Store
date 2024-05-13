import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useShopContext } from '../../Context/ShopContext';
import compareBanner from "../Assets/images/compare_banner.png"
import emptyCompare from "../Assets/images/empty-compare.png"
import {RiDeleteBin2Line} from "react-icons/ri"
import Banner from '../Banner/Banner';
import "./Compare.css"
import BlankPage from '../BlankPage/BlankPage';

export default function Compare() {

    const {all_product, compareList, removeFromCompareList, getCompareListAmount} = useShopContext();
    console.log(compareList);

  return (
    <div className='compare'>
        <Banner img = {compareBanner} title = {"Your compare"} num={getCompareListAmount()} />
        <div className='container'>
          {getCompareListAmount() > 0 ? <div className='content'>
            {
              all_product.map(item => {
                if (compareList[item.id] === "compare") {
                  const {id, img, name, newPrice} = item;
                  return (
                    <div className='box'>
                      <div className='imgbx'>
                      <Link className='imgbx link' to={"/product/"+ id}  onClick={()=>window.scroll(0,0)}>
                        <img src={img} />
                      </Link>
                      </div>
                      <div className='text'>
                      <Link className='link' to={"/product/"+ id}  onClick={()=>window.scroll(0,0)}>
                        <h3>{name}</h3>
                      </Link>
                        <span>{newPrice}$</span>
                        <div className='main-btn'>
                          <Link className='link special-btn' to={"/product/"+id}><span className='hide-mobile'>select </span>options</Link>
                        </div>
                        <button onClick={()=>removeFromCompareList(id)}className="remove">
                          <RiDeleteBin2Line className='remove-icon' />
                        </button>
                      </div>
                    </div>
                  )
                }
              })
            }
            
          </div>
        : <BlankPage name={'compare'} img={emptyCompare} />
        }
        </div>
    </div>
  )
}
