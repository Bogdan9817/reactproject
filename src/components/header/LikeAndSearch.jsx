import React from 'react'
import {AiFillHeart} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'
function LikeAndSearch({setShowSW, showSW}) {
    return (
        <div className="like_search">
            <AiFillHeart className={`icon allign border_right pointer red  `}/>
            <AiOutlineSearch onClick={()=>setShowSW(!showSW)} className="icon allign "/>
        </div>
    )
}

export default LikeAndSearch
