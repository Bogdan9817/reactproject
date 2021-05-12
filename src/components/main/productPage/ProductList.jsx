import React, { useContext } from 'react'
import ProductItemShort from './ProductItemShort'
import data from '../../../data/data'
import {ItemContexts} from '../../../contexts/ItemContexts'

function ProductList() {
    const {val} = useContext(ItemContexts)
    return (
        <div className='products-item-list container'>
           {data.map(item=> item.title.toLowerCase().includes(val.toLowerCase())|| item.brand.toLowerCase().includes(val.toLowerCase())? <ProductItemShort key={item.id} item={item}/>:'')}
            
        </div>
    )
}

export default ProductList
