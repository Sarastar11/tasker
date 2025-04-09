import React, { useState, useEffect } from "react";
import NavbarStyles from './navbar.module.css';
import HomeIcon from '../../assets/images/Logo_Tasker.PNG';
import { Link, useNavigate } from "react-router-dom";
import USFlag from '../../assets/icons/us-flag.png';

function MainNavbar() {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 1024);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={NavbarStyles.navbar_container}>
            <div className={NavbarStyles.navbar_content}>
                <Link to="/home">
                    <img className={NavbarStyles.nav_home_img} src={HomeIcon} alt="Home" />
                </Link>

                {/* Conditionally render the hamburger icon */}
                {isMobileView && (
                    <button
                        className={NavbarStyles.hamburger}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        <span className={NavbarStyles.hamburger_line}></span>
                        <span className={NavbarStyles.hamburger_line}></span>
                        <span className={NavbarStyles.hamburger_line}></span>
                    </button>
                )}

                {/* Navigation Links */}
                <ul className={`${NavbarStyles.nav_list} ${isMobileMenuOpen ? NavbarStyles.nav_list_open : ''}`}>
                    <li>
                        <Link className={NavbarStyles.nav_link} to="/home" onClick={() => setIsMobileMenuOpen(false)}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className={NavbarStyles.nav_link} to="/services" onClick={() => setIsMobileMenuOpen(false)}>
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link className={NavbarStyles.nav_link} to="/contactUs" onClick={() => setIsMobileMenuOpen(false)}>
                            Contact Us
                        </Link>
                    </li>
                    {/* Mobile Menu Buttons */}
                    <li className={NavbarStyles.mobile_nav_btns}>
                        <button className={NavbarStyles.worker_btn} onClick={() => { navigate("/becomeWorker"); setIsMobileMenuOpen(false); }}>
                            Become Worker
                        </button>
                        <button className={NavbarStyles.login_btn} onClick={() => { navigate("/login"); setIsMobileMenuOpen(false); }}>
                            Login
                        </button>
                    </li>
                    {/* Mobile Language Selector */}
                    <li className={NavbarStyles.mobile_language_selector}>
                        <div className={NavbarStyles.language_selector}>
                            <img className={NavbarStyles.flag_icon} src={USFlag} alt="English" />
                            <span>En</span>
                        </div>
                    </li>
                </ul>

                <input className={NavbarStyles.nav_search} placeholder="I want to hire a..." />

                <div className={NavbarStyles.nav_btns}>
                    <button className={NavbarStyles.worker_btn} onClick={() => navigate("/becomeWorker")}>
                        Become Worker
                    </button>
                    <button className={NavbarStyles.login_btn} onClick={() => navigate("/login")}>
                        Login
                    </button>
                </div>

                {/* Language Selector (Desktop) */}
                <div className={NavbarStyles.language_selector}>
                    <img className={NavbarStyles.flag_icon} src={USFlag} alt="English" />
                    <span>En</span>
                </div>
            </div>
        </nav>
    );
}
export default MainNavbar;