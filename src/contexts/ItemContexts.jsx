import { createContext, useState} from 'react'

export const ItemContexts = createContext()

const ItemContextsProvider = ({children})=>{
    const [card, setCard] = useState([])
    const [val, setVal] = useState('')
    
    return(   
        <ItemContexts.Provider value={{card, setCard, val, setVal}}>
            {children}
        </ItemContexts.Provider>    
    )

}

export default ItemContextsProvider