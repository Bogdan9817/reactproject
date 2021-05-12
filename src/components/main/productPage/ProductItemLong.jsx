import React, {useState, useContext, } from 'react'
import {useParams} from 'react-router-dom'
import {generate} from "shortid"
import data from '../../../data/data'
import {ItemContexts} from '../../../contexts/ItemContexts'

function ProductItemLong() {
    const {id} = useParams()
    const newItem =  data.filter(elem=> elem.id == id )
    const item = newItem[0]
    const [genImg, setGenImg] = useState(item.img[0])
    const [getItem, setGetItem] = useState({qty:0,})
    
    const handleChange=(e)=>{
        setGetItem({...getItem, [e.target.name]:[e.target.value].toString()})
    }
    
    const increment = ()=>{
        setGetItem({...getItem, qty : getItem.qty + 1 })
    }
    const decrement = ()=>{
        setGetItem({...getItem, qty: getItem.qty - 1})
    }
    const reset = ()=>{
        setGetItem({qty:0})
    }
    
    const {card, setCard} = useContext(ItemContexts)
   
    function chooseItem(){
            if(getItem.color && getItem.size && getItem.qty>0){
                setGetItem({...getItem, title:item.title,added:true, price:item.price*getItem.qty, id:generate(), })   
                }
                else{alert('you should choose product types')}  
    }
    function handleSubmit(){
        setCard([...card, getItem])
        setGetItem({qty:0,})
    }
    
    
    return (    
        <div className="container ">
            <div className="img_examples">
                <div className="general_img">
                    <img className="general_img" src={genImg} alt="no img yet"/>
                </div>
                <div className="additional_img">
                    {item.img.map(image=><img onClick={()=>setGenImg(image)} className='img pointer' src={image} alt="no img :("/>)}
                </div>
                
            </div>
            <div className="product_info">
                
                <h3>{item.title}</h3>
                3 reviews |   <span className="review">  Add a review </span>
                <h3 className="price">${item.price}</h3>  
                <h5>Availability: 
                    <span className="product_type">In stock</span>
                </h5>
                <h5>Product Code: 
                    <span className="product_type">#4657</span>
                    </h5>
                <h5>Tags: 
                    <span className="product_type">Fashion</span> <span className="product_type">Hood</span> <span className="product_type">Classic</span> </h5>  
                <p>{item.description}</p>
                <ul>
                    {item.details.map(detail=><li>{detail}</li>)}
                </ul>
                <div className="product_selection">
                    <div className="selection">
                        <h4>Color</h4>
                            <select name="color" value={getItem.color?getItem.color:'-1'} onChange={(e)=>handleChange(e)} >
                            <option value='-1'>choose</option>
                           {item.color.map(col=><option value={col}>{col}</option>)}
                           </select> 
                        
                    </div>
                    <div className="selection">
                        <h4>Size</h4>
                        
                             <select name="size" value={getItem.size?getItem.size:'-1'}onChange={(e)=>handleChange(e)}>
                                <option value='-1'>choose</option>
                                {item.size.map(s=><option value={s}>{s}</option>)}
                            </select> 
                        
                    </div>
                    <div className="selection"><h4>Qty</h4>
                        <form className="quantity" action="">
                            <input type="button" onClick={decrement} disabled={getItem.qty===1?true:false} value="-" className="form-btn"/>
                            <span className='number'>{getItem.qty}</span>
                            <input onClick={increment} type="button"disabled={getItem.qty===6?true:false} value="+" className="form-btn"/>
                        </form> 
                    </div>
                </div>
                <h5 onClick={reset} className="clear">Clear selection</h5>
                <div className="cart_and_wish">
                    <div onClick={()=>chooseItem()} className="add_to_cart">Add to Cart</div>
                    <div className="add_to_wishlist">Add to wishlist</div>
                </div>
                <div className="share"><h5>Share this</h5></div>
            </div>
            <div className={`modal ${getItem.added&& getItem.added=== true ?'': 'hidden' }`}>
                <div className='submodal'>
                    <p>persuade that you choose correct types!</p>
                    <span onClick={()=> handleSubmit()} className="btn">Yes</span>
                    <span onClick={()=> setGetItem({...getItem, added:false})}className="btn">Cancel</span>
                </div>
            </div>
       </div>
       
    )
}

export default ProductItemLong
