import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Properties', href: '#properties' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
];

const propertyLinks = [
    { name: 'For Sale', href: '#properties' },
    { name: 'For Rent', href: '#properties' },
    { name: 'Commercial', href: '#properties' },
    { name: 'New Listings', href: '#properties' },
];

const socialLinks = [
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaWhatsapp, href: 'https://wa.me/263784030449', label: 'WhatsApp' },
];

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__grid">
                    {/* Brand */}
                    <div className="footer__brand">
                        <a href="#home" className="footer__logo">
                            <span className="footer__logo-icon">🏠</span>
                            <span className="footer__logo-text">Logic<span className="gradient-text">HQ</span></span>
                        </a>
                        <p className="footer__tagline">
                            Your trusted partner in real estate. We connect you with premium
                            properties and expert guidance to make your property dreams a reality.
                        </p>
                        <div className="footer__social">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="footer__social-link"
                                    aria-label={social.label}
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer__links">
                        <h4 className="footer__heading">Quick Links</h4>
                        <nav className="footer__nav">
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.href} className="footer__link">
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Property Types */}
                    <div className="footer__links">
                        <h4 className="footer__heading">Properties</h4>
                        <nav className="footer__nav">
                            {propertyLinks.map((link) => (
                                <a key={link.name} href={link.href} className="footer__link">
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Contact */}
                    <div className="footer__contact">
                        <h4 className="footer__heading">Contact Us</h4>
                        <div className="footer__contact-list">
                            <a href="#" className="footer__contact-item">
                                <HiLocationMarker size={18} />
                                <span>Harare, Zimbabwe</span>
                            </a>
                            <a href="tel:+263784030449" className="footer__contact-item">
                                <HiPhone size={18} />
                                <span>+263 784 030 449</span>
                            </a>
                            <a href="mailto:info@logichq.co.zw" className="footer__contact-item">
                                <HiMail size={18} />
                                <span>info@logichq.co.zw</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © {new Date().getFullYear()} LogicHQ Properties. All rights reserved.
                    </p>
                    <p className="footer__credits">
                        PropTech Solutions for Zimbabwe 🇿🇼
                    </p>
                </div>
            </div>
        </footer>
    );
}
