import React from 'react'
import {Link} from 'react-router-dom'


function NavBar() {
    return (
        <div className="list">
            <ul>
                <li><Link to="/home">Home </Link></li>
                <li><Link to="/itemsMen">Men</Link></li>
                <li><Link to="/women">Women</Link></li>
                <li><Link to="/">Lookbook</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Blog</Link></li>
            </ul>
            
        </div>
    )
}

export default NavBar
