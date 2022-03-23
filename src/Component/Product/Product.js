import React, { useEffect, useState } from 'react';
import { addToDataBase, removeFromDatabase } from '../Utilities/fakedb';
import './Product.css'

const Product = (props) => {
    const{_id,name,age,gender,company,address}=props.product;
    const likeProfile=(id)=>{
        addToDataBase(_id);
    }
    const liked=()=>likeProfile(_id);
    const removeFromLiked=()=>removeFromDatabase(_id);
    
    return (
        <div>
            <div className="single-product">
                <h1>Name:{name}</h1>
                <p>Age:{age}</p>
                <p>Address:{address}</p>
                <p>Gender:{gender}</p>
                <p>Company Name:{company}</p>
                <button className='btn' onClick={liked}>Like Profile</button>
                <button onClick={removeFromLiked} className='btn'>Remove</button>
            </div>
        </div>
    );
};

export default Product;