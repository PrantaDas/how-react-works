import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products,setProduct]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    return (
        <div>
            <h1>This is Data Load Area.</h1>
            {/* {
                products.map(product=>console.log(product))
            } */}
            
            {
                products.map(product=><Product product={product} key={product._id}></Product>)
            }
        </div>
    );
};

export default Products;