import React from 'react'
import {Link} from "react-router-dom";
import all_product from '../../Assets/all_product';
import "./ShopBanner.css"

export default function ShopBanner({category, img}) {

    const categories = [...new Set(all_product.map(item => item.category)), "Shop"];
    const unChosenCategories = categories.filter(item => item !== category);
    const categoryItemsLength = category !== "Shop" ? all_product.filter(item => item.category === category).length : false;

    return (
        <div className='banner'>
            <div className='container'>
            <div className='banner-content'>
                    <div className='text'>
                        <div className='categories'>
                            <h1 className='chosen-category'>{category}</h1>
                            <ul className='other-categories'>
                                {
                                    unChosenCategories.map((item, i) => {
                                        return (
                                            <li key={i}>
                                                {i > 0 ?<span className='slash'>/</span> : null}
                                                <Link className='link' to={"/" + item.toLowerCase()}>{item}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        {categoryItemsLength ?
                          <h2 className='hide-mobile'><span>{categoryItemsLength}</span> items<span> for </span>{category}</h2>
                        : <h2 className='hide-mobile'><span>12</span> Hours <span>20</span> Mins</h2>
                        }
                        <button className='banner-btn hide-mobile'>Explore now</button>
                    </div>
                    <div className='imgbx hide-mobile'>
                        <img src={img} />
                    </div>
            </div>
            </div>
        </div>
    )
}
