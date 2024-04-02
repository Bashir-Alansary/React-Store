import React, { useState } from 'react'
import Banner from "../Banner/Banner"
import searchBanner from "../Assets/images/search_banner.png"
import "./Search.css"
import { useShopContext } from '../../Context/ShopContext'
import Item from '../Item/Item';

export default function Search() {
    
    const {all_product, searchInputVal, setSearchInputVal} = useShopContext();
    const items = searchInputVal !== "" ? all_product.filter(item => item.name.toLowerCase().includes(searchInputVal.toLowerCase())) : false;
    const [inputVal, setInputVal] = useState(searchInputVal);

  return (
    <div className='search'>
        <Banner 
        title={searchInputVal !== "" ? 'search for "' + searchInputVal + '"' : 'search'} 
        img = {searchBanner}
        num = {items ? items.length : 0} 
        />
        <div className='container'>
            <div className='content'>
                <div className='input-content'>
                    <input 
                    type="search" 
                    placeholder='what are you looking for?' 
                    value = {inputVal} 
                    onChange={(e)=>setInputVal(e.target.value)}
                    />
                    <button className='search-btn' onClick={()=>setSearchInputVal(inputVal)}>Search</button>
                </div>
                <div className='result'>
                    <div className='content'>
                        {searchInputVal !== "" ?
                            items.map(item => {
                                return (
                                    <Item key={item.id} {...item} itemClass={'item'}/>
                                )
                            })
                            : null
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
