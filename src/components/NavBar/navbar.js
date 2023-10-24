import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showDonateLinks, setShowDonateLinks] = useState(false);
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className='logo' />
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-165} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-165} duration={500} className="desktopMenuListItem">About Us</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-165} duration={500} className="desktopMenuListItem">Testimonials</Link>
                <Link activeClass='active' to='faq' spy={true} smooth={true} offset={-165} duration={500} className="desktopMenuListItem">FAQ</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-165} duration={500} className="desktopMenuListItem">Contact Us</Link>
            </div>
            <button className="desktopMenuBtn" onClick={() => setShowDonateLinks(!showDonateLinks)}>DONATE</button>

            {showDonateLinks && (
                <div className="donateDropdown">
                    <a href="https://donate.stripe.com/7sI026aFe8RY7Li4gh" target="_blank" rel="noopener noreferrer" onClick={() => setShowDonateLinks(false)}>Monthly Donate</a>
                    <a href="https://donate.stripe.com/aEU6qudRq0ls2qYbII" target="_blank" rel="noopener noreferrer" onClick={() => setShowDonateLinks(false)}>One-time Donate</a>
                </div>
            )}

            <img src={menu} alt="Menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
            <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About Us</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Testimonials</Link>
                <Link activeClass='active' to='faq' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>FAQ</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact Us</Link>
                <a class="mobileDonateLink" href="https://donate.stripe.com/7sI026aFe8RY7Li4gh" target="_blank" rel="noopener noreferrer" onClick={() => setShowDonateLinks(false)}>Monthly Donate</a>
                <a class="mobileDonateLink" href="https://donate.stripe.com/aEU6qudRq0ls2qYbII" target="_blank" rel="noopener noreferrer" onClick={() => setShowDonateLinks(false)}>One-time Donate</a>
            </div>
        </nav>
    )
}

export default Navbar;