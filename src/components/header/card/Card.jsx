import {useContext } from 'react'
import {ItemContexts} from '../../../contexts/ItemContexts'


function Card({setShow}) {
    const {card, setCard} = useContext(ItemContexts)
    const removeItem=(item)=>{
        setCard(card.filter(elem=>elem.id !== item.id))
        if(card.length===0){setShow(false)}
    }
    const removeAll = () => {
        setCard([])
        setShow(false)
    }
    
    return (
        <div className="card">
           {card.map(item=>
           <div className='card-item' key={item.id}>
            <h4>Title:{item.title}</h4>
            <h4>Color:{item.color}</h4>
            <h4>Size:{item.size}</h4>
            <h4>Price:{item.price}</h4><br/>
            <span onClick={()=>removeItem(item)} className="btn margin-top-15 ">Delete</span><br/>
           </div>)}
            <h3>Total Price{card.reduce((acc,cur)=> acc + cur.price,0)}</h3>
            <span onClick={()=>removeAll()} className="btn">Clear All</span>

        </div>
    )
}



export default Card
