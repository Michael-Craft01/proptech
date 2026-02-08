import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiArrowUp } from 'react-icons/hi';
import { FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp, FaGithub } from 'react-icons/fa';
import './Footer.css';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Services', href: '#services' },
    { name: 'Technology', href: '#technology' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
];

const solutionLinks = [
    { name: 'Property Management', href: '#solutions' },
    { name: 'Real Estate Websites', href: '#solutions' },
    { name: 'AI Chatbots', href: '#solutions' },
    { name: 'CRM Systems', href: '#solutions' },
    { name: 'Analytics Dashboards', href: '#solutions' },
];

const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/michael-ragu-aa215035a/', label: 'LinkedIn' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaGithub, href: '#', label: 'GitHub' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaWhatsapp, href: 'https://wa.me/263784030449', label: 'WhatsApp' },
];

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

export default function Footer() {
    return (
        <footer className="footer">
            {/* Pre-footer CTA */}
            <div className="footer__cta">
                <div className="footer__cta-content">
                    <h3 className="footer__cta-title">
                        Ready to <span className="gradient-text">Transform</span> Your Business?
                    </h3>
                    <p className="footer__cta-text">
                        Let's discuss how we can help you achieve your goals.
                    </p>
                </div>
                <a href="mailto:michaelragu@logichq.tech" className="btn-primary footer__cta-btn">
                    Book a Free Consultation
                </a>
            </div>

            <div className="footer__container">
                <div className="footer__grid">
                    {/* Brand */}
                    <div className="footer__brand">
                        <a href="#home" className="footer__logo">
                            <img src="/logo.png" alt="LogicHQ" className="footer__logo-img" />
                            <span className="footer__logo-text">Logic<span className="gradient-text">HQ</span></span>
                        </a>
                        <p className="footer__tagline">
                            Enterprise PropTech solutions that help real estate businesses
                            attract more buyers, manage properties, and close deals faster.
                        </p>
                        <div className="footer__social">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    className="footer__social-link"
                                    aria-label={social.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <social.icon size={18} />
                                </motion.a>
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

                    {/* Solutions */}
                    <div className="footer__links">
                        <h4 className="footer__heading">Solutions</h4>
                        <nav className="footer__nav">
                            {solutionLinks.map((link) => (
                                <a key={link.name} href={link.href} className="footer__link">
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Contact */}
                    <div className="footer__contact">
                        <h4 className="footer__heading">Get in Touch</h4>
                        <div className="footer__contact-list">
                            <a href="#" className="footer__contact-item">
                                <HiLocationMarker size={18} />
                                <span>Harare, Zimbabwe</span>
                            </a>
                            <a href="tel:+263784030449" className="footer__contact-item">
                                <HiPhone size={18} />
                                <span>+263 784 030 449</span>
                            </a>
                            <a href="mailto:michaelragu@logichq.tech" className="footer__contact-item">
                                <HiMail size={18} />
                                <span>michaelragu@logichq.tech</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © {new Date().getFullYear()} LogicHQ PropTech. All rights reserved.
                    </p>
                    <div className="footer__bottom-links">
                        <a href="#">Privacy Policy</a>
                        <span>•</span>
                        <a href="#">Terms of Service</a>
                    </div>
                    <button
                        className="footer__scroll-top"
                        onClick={scrollToTop}
                        aria-label="Scroll to top"
                    >
                        <HiArrowUp size={20} />
                    </button>
                </div>
            </div>
        </footer>
    );
}
