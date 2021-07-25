import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button.js'
import './Navbar.css'
import navtitle from '../images/black_logo.png'

function Navbar() {

    const [click, setClick] = useState(false);

    const [dropdown, setDropdown] = useState(false);


    const handleClick = () => { setClick(!click) };

    const closeMobileMenu = () => { setClick(false) };

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        }
        else {
            setDropdown(true);
        }
    }

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        }
        else {
            setDropdown(false);
        }
    }

    return (
        <nav className='navbar'>
            <Link to='/' className='navbar-logo' >
                <img src={navtitle}></img>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        HOME
                    </Link>
                </li>
                <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        THE JOURNEY
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        TEAM
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        STORE
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        ABOUT 
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        CONTACT 
                    </Link>
                </li>
                <li className='nav-item-mobile'>
                    <Button/>
                </li>
            </ul>
            <div className='top-left'>
                <div className='btn-grp'>
                    <Button/>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;