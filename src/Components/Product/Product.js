import React from 'react'
import "./Product.css"
import { useParams } from 'react-router-dom';
import ProductImgs from './ProductImgs/ProductImgs';
import ProductAbout from './ProductAbout/ProductAbout';
import ProductDetails from './ProductDetails/ProductDetails';
import { useShopContext } from "../../Context/ShopContext"
import ProductRelated from './ProductRelated/ProductRelated';

export default function Product() {
  
  const {all_product} = useShopContext();
  const {productId} = useParams();
  const product = all_product.find(item => item.id === Number(productId)); 

  return (
    <div className='product'>
     <div className='container'>
        <div className='content'>
          <ProductImgs product = {product} />
          <ProductDetails product = {product} />
        </div>
        <ProductAbout product = {product} />
        <ProductRelated />
     </div>
    </div>
  )
}
