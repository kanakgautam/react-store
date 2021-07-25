import React from 'react'
import './Team.css'
import TeamArray from './TeamArray'
import TeamCard from './TeamCard'
function Team() {
    return (
        <div className='team-container'>
            <h2 className='team-quote'>Without bonding and Coordination every project is a failure. LOOK at who makes KICKSUP great. ;)</h2>
            <div className='team-members'>
                {
                    TeamArray.map((item,index)=>{
                        return(
                            <TeamCard src={item.src} name={item.name} role={item.role}/>
                        )
                    })
                }
            </div>
            <h2>and You!</h2>    
        </div>
    )
}

export default Team
