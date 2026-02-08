import { motion } from 'framer-motion';
import { HiArrowRight, HiCheckCircle, HiPlay } from 'react-icons/hi';
import './Hero.css';

const highlights = [
    'Custom Property Management Systems',
    'AI-Powered Lead Automation',
    'Real Estate CRM Solutions',
];

const propertyImages = [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400&h=300&fit=crop',
];

export default function Hero() {
    return (
        <section id="home" className="hero">
            {/* Background */}
            <div className="hero__bg">
                <div className="hero__gradient" />
                <div className="hero__grid-pattern" />
                <div className="hero__glow hero__glow--1" />
                <div className="hero__glow hero__glow--2" />
            </div>

            <div className="hero__container">
                {/* Left Content */}
                <motion.div
                    className="hero__content"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.div
                        className="hero__badge"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <span className="hero__badge-dot" />
                        PropTech Solutions Provider
                    </motion.div>

                    <h1 className="hero__title">
                        We Build Tech That
                        <br />
                        <span className="hero__title-highlight">Powers Real Estate</span>
                        <br />
                        Businesses
                    </h1>

                    <p className="hero__subtitle">
                        Enterprise software solutions that help real estate companies
                        attract more buyers, manage properties efficiently, and close deals 3x faster.
                    </p>

                    <ul className="hero__highlights">
                        {highlights.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                            >
                                <HiCheckCircle className="hero__highlight-icon" />
                                <span>{item}</span>
                            </motion.li>
                        ))}
                    </ul>

                    <div className="hero__actions">
                        <motion.a
                            href="mailto:michaelragu@logichq.tech"
                            className="btn-primary hero__btn"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Book a Free Consultation
                            <HiArrowRight />
                        </motion.a>
                        <motion.a
                            href="#solutions"
                            className="btn-secondary hero__btn"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <HiPlay />
                            View Our Work
                        </motion.a>
                    </div>

                    {/* Trust indicators */}
                    <motion.div
                        className="hero__trust"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        <div className="hero__trust-item">
                            <strong>50+</strong>
                            <span>Projects Delivered</span>
                        </div>
                        <div className="hero__trust-divider" />
                        <div className="hero__trust-item">
                            <strong>20+</strong>
                            <span>Happy Clients</span>
                        </div>
                        <div className="hero__trust-divider" />
                        <div className="hero__trust-item">
                            <strong>5+</strong>
                            <span>Years Experience</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Visual - Property Gallery */}
                <motion.div
                    className="hero__visual"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {/* Property Images Grid */}
                    <div className="hero__properties">
                        {propertyImages.map((img, index) => (
                            <motion.div
                                key={index}
                                className={`hero__property hero__property--${index + 1}`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                whileHover={{ scale: 1.05, zIndex: 20 }}
                            >
                                <img src={img} alt={`Property ${index + 1}`} />
                            </motion.div>
                        ))}
                    </div>

                    {/* Floating Stats */}
                    <motion.div
                        className="hero__float-card hero__float-card--1"
                        animate={{ y: [0, -12, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <span className="hero__float-number">+340%</span>
                        <span className="hero__float-label">Lead Increase</span>
                    </motion.div>

                    <motion.div
                        className="hero__float-card hero__float-card--2"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <span className="hero__float-number">24/7</span>
                        <span className="hero__float-label">AI Support</span>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="hero__scroll"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <span>Scroll to explore</span>
                <div className="hero__scroll-line" />
            </motion.div>
        </section>
    );
}
