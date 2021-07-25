import React from 'react'
import './TeamCard.css'
import imag1 from '../images/dribbble.png'
import imag2 from '../images/facebook.png'
import imag3 from '../images/LinkedIn.png'
import imag4 from '../images/Medium.png'



function TeamCard(props) {
    return (
        <div className='team-card'>
           <img  className='member-image' src ={props.src}  alt='member image'/> 
           <h2>{props.name}</h2>
           <h4>{props.role}</h4>
           <div className='social-media'>
               <img className='team-card-image' src={imag1}></img>
               <img className='team-card-image' src={imag2}></img>
               <img className='team-card-image' src={imag3}></img>
               <img className='team-card-image' src={imag4}></img>
           </div>
        </div>
    )
}

export default TeamCard
