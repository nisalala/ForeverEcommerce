import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';
import { useState } from 'react';
import { useEffect } from 'react';

const LatestCollection = () => {

   
const {products} = useContext(ShopContext);
// state variable for 10 products to ve displayed as latest collection
const [latestProducts, setLatestProducts] = useState([])

// using this 10 data is displaued
useEffect(()=>{
setLatestProducts(products.slice(0,10));
},[])



  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
<Title text1={'LATEST'} text2={'COLLECTIONS'}/>
<p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores earum iusto sit corporis quas molestias ducimus similique inventore ut sapiente! Modi, rerum. Atque totam dignissimos facere ab pariatur aliquam aperiam!</p>
      </div>

{/* RENDERING PRODUCTS */}
<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>

{
    latestProducts.map((item,index)=>(
        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
    ))
}

</div>

    </div>
  )
}

export default LatestCollection
