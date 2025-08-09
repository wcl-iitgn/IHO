import React, { useEffect, useState } from 'react';
import Logo from "../assets/images/logo-2.jpg"
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';

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
                        <h1>India Hydrological Outlook</h1>
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

                                {/* <NavLink
                                    className={({ isActive }) => (isActive ? 'active_nav' : 'nav__item')}
                                    to="/" onClick={handleLinkClick}>
                                    Observed condition
                                </NavLink>

                                <NavLink
                                    className={({ isActive }) => (isActive ? 'active_nav' : 'nav__item')}
                                    to="/forecast" onClick={handleLinkClick}>
                                    Forecast conditions
                                </NavLink> */}


                                <NavLink
                                    className={({ isActive }) => (isActive ? 'active_nav' : 'nav__item')}
                                    to="/" onClick={handleLinkClick}>
                                    Rainfall
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'active_nav' : 'nav__item')}
                                    to="/temp" onClick={handleLinkClick}>
                                    Surface Air Temperature
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'active_nav' : 'nav__item')}
                                    to="/ro" onClick={handleLinkClick}>
                                    Relative Wetness
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'active_nav' : 'nav__item')}
                                    to="/runoff" onClick={handleLinkClick}>
                                    Total Runoff
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'active_nav' : 'nav__item')}
                                    to="/et" onClick={handleLinkClick}>
                                    Evapotranspiration
                                </NavLink>




                                <NavLink
                                    className={({ isActive }) => (isActive ? 'active_nav' : 'nav__item')}
                                    to="/stnq" onClick={handleLinkClick}>
                                    Streamflow at Gauge Stations
                                </NavLink>

                                <NavLink
                                    className={({ isActive }) => (isActive ? 'active_nav' : 'nav__item')}
                                    to="/sm" onClick={handleLinkClick}>
                                    Streamflow at Stream Network
                                </NavLink>


                                <NavLink
                                    className={({ isActive }) => (isActive ? 'active_nav' : 'nav__item')}
                                    to="/info" onClick={handleLinkClick}>
                                    Info
                                </NavLink>


                                <a href='https://drive.google.com/file/d/1uQlMoiuquSJ-LbSliciB2PCMdJUVCLUX/view?usp=sharing' className='nav__item' target='_blank' rel="noreferrer noopener">
                                Archive
                                </a>

                                <div className='dropdown_nav_container'>
                                    <Link className="nav__item dropdown_nav" to="#">
                                        Data Portals  <i className="fa fa-chevron-down"></i>
                                    </Link>
                                    <div className="dropdown_content">
                                        <a className='dropdown_link' href="https://indiadroughtmonitor.in/" target='_blank' rel="noreferrer noopener"> India Drought Monitor</a>
                                        <a className='dropdown_link' href="https://indiadroughtatlas.in/" target='_blank' rel="noreferrer noopener"> India Drought Atlas</a>
                                        <a className='dropdown_link' href="https://indiafloodatlas.in/" target='_blank' rel="noreferrer noopener"> India Flood Atlas</a>
                                        <a className='dropdown_link' href="https://wcl-iitgn.github.io/geoid/" target='_blank' rel="noreferrer noopener"> Geoportal of Indian Dams (GeoID)</a>

                                    </div>
                                </div>


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
