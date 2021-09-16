import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GiMedicalPackAlt } from 'react-icons/gi';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                        {/* <GiMedicalPackAlt className="navbar-icon"/> */}
                        <img src='images/icon.svg' alt= '' />
                        DoctorAppointment
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contactus' className="nav-links" onClick={closeMobileMenu}>
                                Contact Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/aboutus' className="nav-links" onClick={closeMobileMenu}>
                                About Us
                            </Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link to='/appointment' className="nav-links" onClick={closeMobileMenu}>
                                Appointment
                            </Link>
                        </li> */}
                        <li className='nav-btn'>
                {button ? (
                  <Link to='/Appointment' className='btn-link'>
                    <Button buttonStyle='btn--outline'>Make An Appointment</Button>
                  </Link>
                ) : (
                  <Link to='/Appointment' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      Make an Appointment
                    </Button>
                  </Link>
                           )} 
                        </li>
                    </ul>
                </div>                
            </div>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
