import {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import Card from './card/Card'
import LikeAndSearch from './LikeAndSearch'
import SearchWindow from './searchWindow/SearchWindow'
import NavBar from './NavBar'
import {ItemContexts} from '../../contexts/ItemContexts'
import {UserContexts} from '../../contexts/UserContexts'
function Header() {
    const [show, setShow] = useState(false)
    const [showSW, setShowSW] = useState(false)
    const {logged, setLogged} = useContext(UserContexts)
    const {card} = useContext(ItemContexts)
    const checkCard = () => {
        card.length>0? setShow(!show): alert('the card is empty')
    }
    const logout = () => {
        setLogged(false)
        localStorage.removeItem('role')
    }
    
    return (
        <header>     
        {logged===true?
            <div className="log-links">
            <span onClick={()=>logout()}className="log-link pointer">Logout</span>
            </div>:<div className="log-links">
                <Link to='/login'><span className="log-link pointer">Login</span></Link>
                <Link to='/signup'><span className="log-link pointer">Signup</span></Link>
                </div>}
        <div className="container">
                <div className="currency">usd</div>
                <div className="title"><h1>Bonfire</h1></div>
                <div className="btn" onClick={()=>checkCard()}>Card</div>
                <div className={`${show   ?'show': 'hidden'}`}><Card setShow={setShow} /></div>
        </div>
        <span className="underline"></span>
        <div className="container">
            <div className="nav">
                <span className="nav_menu"></span>
            </div>
            <NavBar/>
            <LikeAndSearch showSW={showSW} setShowSW={setShowSW}/>
            <div className={`${showSW?'': 'hidden'} width-100`}><SearchWindow /></div>
        </div>
        <span className="underline"></span>
   </header>
    )
}

export default Header
