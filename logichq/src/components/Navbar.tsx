import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    return (
        <motion.nav
            className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="navbar__container">
                <a href="#home" className="navbar__logo">
                    <img src="/logo.png" alt="LogicHQ" className="navbar__logo-img" />
                    <span className="navbar__logo-text">Logic<span className="gradient-text">HQ</span></span>
                </a>

                <div className="navbar__links">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="navbar__link">
                            {link.name}
                        </a>
                    ))}
                </div>

                <a href="mailto:michaelragu@logichq.tech" className="navbar__cta btn-primary">
                    Book a Demo
                </a>

                {/* Mobile Toggle */}
                <button
                    className={`navbar__toggle ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`navbar__mobile ${isMobileMenuOpen ? 'active' : ''}`}>
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className={`navbar__mobile-link ${activeLink === link.href.substring(1) ? 'active' : ''}`}
                        onClick={() => {
                            setActiveLink(link.href.substring(1));
                            setIsMobileMenuOpen(false);
                        }}
                    >
                        {link.name}
                    </a>
                ))}
                <a href="#contact" className="btn-primary navbar__mobile-cta" onClick={() => setIsMobileMenuOpen(false)}>
                    Get Started
                </a>
            </div>
        </motion.nav>
    );
}
