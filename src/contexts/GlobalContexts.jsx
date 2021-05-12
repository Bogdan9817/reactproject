import UserContextsProvider from './UserContexts'
import ItemContextsProvider from './ItemContexts'
import {BrowserRouter as Router} from 'react-router-dom'
function GlobalContext({children}){
    return(
        <Router>
            <UserContextsProvider>
                <ItemContextsProvider>
                    {children}
                </ItemContextsProvider>
            </UserContextsProvider>
        </Router>
    )
}

export default GlobalContext