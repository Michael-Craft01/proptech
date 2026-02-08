import { motion } from 'framer-motion';
import { HiArrowRight, HiPlay, HiCheckCircle } from 'react-icons/hi';
import './Hero.css';

const highlights = [
    'Property Management Systems',
    'Real Estate CRMs',
    'AI-Powered Automation',
];

export default function Hero() {
    return (
        <section id="home" className="hero">
            {/* Background Elements */}
            <div className="hero__bg">
                <div className="hero__glow hero__glow--1" />
                <div className="hero__glow hero__glow--2" />
                <div className="hero__grid" />
            </div>

            <div className="hero__container">
                <motion.div
                    className="hero__content"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.span
                        className="hero__badge"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <span className="hero__badge-dot" />
                        Enterprise PropTech Solutions
                    </motion.span>

                    <h1 className="hero__title">
                        PropTech Solutions for
                        <br />
                        <span className="gradient-text">Smarter Real Estate</span>
                        <br />
                        Businesses
                    </h1>

                    <p className="hero__subtitle">
                        We help real estate companies attract buyers, manage properties,
                        and close deals faster using cutting-edge technology.
                    </p>

                    <ul className="hero__highlights">
                        {highlights.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                            >
                                <HiCheckCircle className="hero__highlight-icon" />
                                {item}
                            </motion.li>
                        ))}
                    </ul>

                    <div className="hero__actions">
                        <motion.a
                            href="#contact"
                            className="btn-primary hero__btn"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Book a Demo
                            <HiArrowRight />
                        </motion.a>
                        <motion.a
                            href="#services"
                            className="btn-secondary hero__btn"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <HiPlay />
                            Learn More
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero__visual"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="hero__dashboard">
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=500&fit=crop"
                            alt="PropTech Dashboard"
                            className="hero__dashboard-image"
                        />
                        <div className="hero__dashboard-overlay">
                            <span>Real-time Analytics</span>
                        </div>
                    </div>
                    <div className="hero__stats-row">
                        <div className="hero__mini-stat">
                            <strong>3x</strong>
                            <span>Faster Responses</span>
                        </div>
                        <div className="hero__mini-stat">
                            <strong>60%</strong>
                            <span>More Leads</span>
                        </div>
                        <div className="hero__mini-stat">
                            <strong>24/7</strong>
                            <span>Automation</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="hero__scroll"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                <div className="hero__scroll-line" />
            </motion.div>
        </section>
    );
}
