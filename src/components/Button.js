import React from 'react'
import {Link} from 'react-router-dom'
import './Button.css'

function Button(props) {
    return (
        <div>
           <Link to='/'>
               <button className='btn'><div className='btn-wrapper'><i class="far fa-user"></i></div></button>
           </Link> 
        </div>
    )
}

export default Button
 