import {useContext,} from 'react'
import {ItemContexts} from '../../../contexts/ItemContexts'

function SearchWindow() {
    const {val, setVal} = useContext(ItemContexts)
    const handleChange = (e) => {
         const newVal = e.target.value
          setVal(newVal)
    }
    
    

 return(
     <>
     <input className='searching_window' type='text' onChange={(e)=>handleChange(e)} value={val} placeholder='what you are looking for???'/>
     </>
 )
}

export default SearchWindow