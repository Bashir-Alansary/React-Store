import React, { useState } from 'react'
import { useShopContext } from '../../Context/ShopContext';
import { RiDeleteBin2Line } from "react-icons/ri";
import "./Cart.css"
import { Link } from 'react-router-dom';
import cartBanner from "../Assets/images/cart_banner.png"
import emptyCart from "../Assets/images/empty-cart.webp"
import Banner from '../Banner/Banner';
import BlankPage from '../BlankPage/BlankPage';

export default function Cart() {

  const
  {
    all_product,
    cartItems,
    increaseItemAmount,
    decreseItemAmount,
    removeFromCart,
    getCartTotal,
    getCartAmount,
  } = useShopContext();

  return (
    <div className='cart'>
      <Banner img={cartBanner} title={"Your cart"} num = {getCartAmount()} />
      {getCartAmount() > 0 ? <div className='container'>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Description</th>
              <th scope="col">Unit Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th scope="col">remove</th>
            </tr>
          </thead>
          <tbody>
            {
              all_product.map(item => {
                if (cartItems[item.id] > 0) {
                  const {id, img, name, newPrice, sizes} = item;
                  const quantity = cartItems[id];
                  const typeTotal = cartItems[id] * newPrice;
                  return(
                    <tr key={id}>
                      <td className='imgbx'>
                        <Link 
                            className='link' 
                            to={"/product/" + id} 
                            onClick={()=>window.scroll(0,0)}>
                            <img src={img} />
                        </Link>
                      </td>
                      <td className='name'>
                        <Link 
                            className='link' 
                            to={"/product/" + id} 
                            onClick={()=>window.scroll(0,0)}>
                            {name}
                        </Link>
                      </td>
                      <td className='unit-price'><span>{newPrice}$</span></td>
                      <td className='quantity'>
                        <div className='amount'>
                          <div className='num'>
                            <input type="number" min={0} value={quantity} />
                          </div>
                          <div className='control'>
                            <button onClick={()=>increaseItemAmount(id)}>+</button>
                            <button onClick={()=>decreseItemAmount(id)}>-</button>
                          </div>
                        </div>
                      </td>
                      <td className='type-total'><span>{typeTotal}$</span></td>
                      <td className='remove-btn'><button onClick={()=>removeFromCart(id)}><RiDeleteBin2Line /></button></td>
                    </tr>
                  )
                }
              })
            }
          </tbody>
        </table>
        <div className='final-details'>
            <div className='promocode'>
              <input type="text" placeholder="promo code" />
              <button>Apply</button>
            </div>
            <div className='total'>
              <b>Total: </b><span>{getCartTotal()}$</span>
            </div>
            <div className='update-cart'>
              <button>Update Cart</button>
            </div>
        </div>
      </div>
      : <BlankPage name='cart' img={emptyCart} />
      }
    </div>
  )
}
