import { createContext, useState} from 'react'

export const UserContexts = createContext()

const UserContextsProvider = ({children})=>{
    const [logged, setLogged] = useState(false)
    
    
    return(    
        <UserContexts.Provider value={{logged, setLogged}}>
            {children}
        </UserContexts.Provider>
    )

}

export default UserContextsProvider


