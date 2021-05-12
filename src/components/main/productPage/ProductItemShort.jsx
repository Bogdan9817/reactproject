import React,{useState} from 'react'
import {Link, } from 'react-router-dom'




function ProductItemShort({item}) {
    
    return (
        <div className='product-item-short'>
            <Link to={`/itemsMen/${item.id}`}><img className="small-img"src={item.img[0]} alt="no img"/>
            <h2>{item.brand}:{item.title}</h2>
            <h2 className='price margin-bottom'>{item.price}$</h2><br/>
            <span className='btn margin-top'  >show more</span>
            </Link>
        </div>
    )
}

export default ProductItemShort
