import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import { HiMail, HiArrowRight } from 'react-icons/hi';
import './Founder.css';

export default function Founder() {
    return (
        <section id="about" className="founder">
            <div className="founder__container">
                <motion.div
                    className="founder__content"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="founder__image-wrapper">
                        <motion.img
                            src="/michael-ragu.png"
                            alt="Michael Ragu - Founder & Lead Engineer"
                            className="founder__image"
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        />
                        <div className="founder__image-border" />
                    </div>

                    <div className="founder__info">
                        <span className="founder__label">Meet the Founder</span>
                        <h2 className="founder__name">
                            Michael <span className="gradient-text">Ragu</span>
                        </h2>
                        <p className="founder__role">Founder & Lead Engineer</p>

                        <div className="founder__bio">
                            <p>
                                I'm a full-stack software engineer passionate about building technology
                                that solves real business problems. With expertise in React, Node.js,
                                Python, and AI/ML, I help real estate businesses modernize their
                                operations and scale efficiently.
                            </p>
                            <p>
                                Based in Zimbabwe, I've worked with real estate companies across
                                Southern Africa, delivering property management systems, AI chatbots,
                                and custom CRM solutions that drive measurable results.
                            </p>
                            <p>
                                When I'm not coding, I'm researching the latest in PropTech innovation
                                to bring cutting-edge solutions to my clients.
                            </p>
                        </div>

                        <div className="founder__skills">
                            <span className="founder__skill">React</span>
                            <span className="founder__skill">Node.js</span>
                            <span className="founder__skill">Python</span>
                            <span className="founder__skill">AI/ML</span>
                            <span className="founder__skill">PropTech</span>
                        </div>

                        <div className="founder__actions">
                            <a
                                href="https://www.linkedin.com/in/michael-ragu-aa215035a/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary founder__btn"
                            >
                                <FaLinkedin />
                                Connect on LinkedIn
                            </a>
                            <a
                                href="mailto:michaelragu@logichq.tech"
                                className="btn-secondary founder__btn"
                            >
                                <HiMail />
                                Get in Touch
                                <HiArrowRight />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
