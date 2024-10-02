import React, { useEffect, useState } from 'react';
import Logo from "../assets/images/logo-2.jpg"
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaExternalLinkAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const NavbarMain = () => {

    const [showMenu, setShowMenu] = useState(false);

    const handleToggle = () => {
        setShowMenu(!showMenu);
    };

    const handleLinkClick = () => {
        setShowMenu(false);
    };



    return (
        <>
            <div className='navbar_main_container'>
                <div className='short_nav_container'>
                    <div className='logo_text'>
                        <h1>Hydrologic Outlook of India</h1>
                    </div>
                    <div className="navbar__toggle scrolled" onClick={handleToggle}>
                        {showMenu ? <FaTimes /> : <FaBars />}
                    </div>


                </div>


                <div className='navbar_container'>

                    {/* <div className="navbar__logo">
                        <Link to="/">
                            <img src={Logo} alt="nav_logo" />
                        </Link>
                    </div> */}



                    <div className={`main_nav ${showMenu ? 'show' : ''}`}>
                        <div className="nav__content">
                            {/* <div className="main_nav_logo">
                                <Link to="/" onClick={handleLinkClick}>
                                    <img src={Logo} alt="nav_logo" />
                                </Link>
                            </div> */}

                            <div className='nav__list'>


                                <NavLink
                                    className={({ isActive }) => (isActive ? 'active_nav' : 'nav__item')}
                                    to="/" onClick={handleLinkClick}>
                                    Observed condition
                                </NavLink>

                                <NavLink
                                    className={({ isActive }) => (isActive ? 'active_nav' : 'nav__item')}
                                    to="/forecast" onClick={handleLinkClick}>
                                    Forecast conditions
                                </NavLink>


                                <NavLink
                                    className={({ isActive }) => (isActive ? 'active_nav' : 'nav__item')}
                                    to="/info" onClick={handleLinkClick}>
                                    Info
                                </NavLink>
                                <NavLink className={({ isActive }) => (isActive ? 'active_nav' : 'nav__item')}
                                    to="/contact" onClick={handleLinkClick}>
                                    Contact Us
                                </NavLink>

                                <a className="nav__item"
                                    href="https://indiadroughtmonitor.in/" onClick={handleLinkClick} target='_blank' rel="noreferrer noopener">
                                    India Drought Monitor&nbsp;<FaExternalLinkAlt />
                                </a>

                                <a className="nav__item"
                                    href="https://indiadroughtatlas.in/" onClick={handleLinkClick} target='_blank' rel="noreferrer noopener">
                                    India Drought Atlas&nbsp;<FaExternalLinkAlt />
                                </a>

                                <a className="nav__item"
                                    href="https://indiafloodatlas.in/" onClick={handleLinkClick} target='_blank' rel="noreferrer noopener">
                                    India Flood Atlas&nbsp;<FaExternalLinkAlt />
                                </a>

                                <a className="nav__item"
                                    href="https://vmishra.people.iitgn.ac.in/water&climate/" onClick={handleLinkClick} target='_blank' rel="noreferrer noopener">
                                    WCL&nbsp;<FaExternalLinkAlt />
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>



    )
}

export default NavbarMain
