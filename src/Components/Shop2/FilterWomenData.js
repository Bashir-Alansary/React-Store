import React, {useState} from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function FilterWomenData({filterColors, filterTypes ,categoryData}) {
    const colors = [...new Set(categoryData.map(item => item.color))];
    const types = [...new Set(categoryData.map(item => item.type))];
    const [toggleColor, setToggleColor] = useState(false);
    const [toggleTypes, setToggleTypes] = useState(false);

    return (
        <>
        <div className='category'>
            <h3 className='hide-mobile'>colors</h3>
            <button className='hide-pc' onClick={() => setToggleColor(!toggleColor)}>
                <h3>colors</h3>
                {toggleColor ? <span><FaChevronUp /></span>
                : <span><FaChevronDown /></span> }
            </button>
            <ul className={toggleColor? 'colors show' : 'colors hide'}>
                {
                    colors.map((color, i)=> {
                        return (
                            <li key={i} className='color'>
                                <input
                                type="checkbox" 
                                id={color} 
                                value={color} 
                                onChange={filterColors} 
                                />
                                <label for={color}>{color}</label>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        <div className='category'>
            <h3 className='hide-mobile'>products types</h3>
            <button className='hide-pc' onClick={() => setToggleTypes(!toggleTypes)}>
                <h3>products types</h3>
                {toggleTypes ? <span><FaChevronUp /></span>
                : <span><FaChevronDown /></span> }
            </button>
            <ul className={toggleTypes? 'product-types show' : 'product-types hide'}>
                {
                    types.map((type, i)=> {
                        return (
                            <li key={i} className='product-type'>
                                <input 
                                type="checkbox" 
                                id={type} 
                                value={type} 
                                onChange={filterTypes} 
                                />
                                <label for={type}>{type}</label>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        </>
  )
}
