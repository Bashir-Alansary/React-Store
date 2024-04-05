import React from 'react'
import { useShopContext } from '../../Context/ShopContext'
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import BlankPage from "../BlankPage/BlankPage"
import emptyCart from "../Assets/images/empty-cart.webp"
import "./SubCart.css"

export default function SubCart() {

    const{
        showSubCart, 
        setShowSubCart, 
        all_product, 
        cartItems, 
        removeFromCart, 
        getCartTotal, 
        getCartAmount,
        increaseItemAmount,
        decreseItemAmount,
    } = useShopContext();

  return (
    <div className={showSubCart? "subcart show" : "subcart hide"}>
        <div className='title'>
            <div>
                <h6>Shopping Cart</h6>
                {getCartAmount() > 0 && <span>{getCartAmount()} items</span>}
            </div>
            <button className='close' onClick={()=>setShowSubCart(false)}><IoCloseSharp /></button>
        </div>
        {getCartAmount() > 0 ? <div>
            <div className='subcart-items'>
                {
                    all_product.map(item=> {
                        if (cartItems[item.id] > 0) {
                            const{id, img, name, newPrice} = item;
                            return(
                                <div key={id} className='subcart-item'>
                                    <Link className='link' to={"/product/"+ id}>
                                        <img src={img} />
                                    </Link>
                                    <div className='details'>
                                        <Link className='link' to={"/product/"+ id}><h6>{name}</h6></Link>
                                        <p className='item-price'>{cartItems[id]} x {newPrice} $</p>
                                        <div className='control'>
                                            <button onClick={()=>increaseItemAmount(id)}>+</button>
                                            <input type="number" min={0} value={cartItems[id]} />
                                            <button onClick={()=>decreseItemAmount(id)}>-</button>
                                        </div>
                                    </div>
                                    <div className='remove'>
                                        <button onClick={()=>removeFromCart(id)}><IoCloseSharp /></button>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
            <div className="subcart-total title">
                <h6>Subtotal:</h6>
                <span>{getCartTotal()} $</span>
            </div>
            <div className="subcart-btns">
                <Link className="link" to="/cart" onClick={()=>setShowSubCart(false)}>view cart</Link>
                <button>check out</button>
            </div>
        </div>
        : <div className='blank-content'>
            <BlankPage name='cart' img={emptyCart}/>
        </div>
        }
    </div>
  )
}
