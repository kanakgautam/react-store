import React from 'react'
import './Shoes.css'

function Shoes(props) {
    return (
        <div className='shoe-card'>
            <img className='shoe-image' src={props.src} alt='shoe-image' />
            <h3 className='shoe-heading'>{props.name}</h3>
            <p className='shoe-para'> Rs {props.price}</p>
        </div>
    )
}

export default Shoes
