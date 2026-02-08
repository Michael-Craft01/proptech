import { motion } from 'framer-motion';
import { HiArrowRight, HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import './Contact.css';

export default function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="contact__container">
                <motion.div
                    className="contact__content"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="contact__title">
                        Ready to Transform Your
                        <span className="gradient-text"> Real Estate Business?</span>
                    </h2>
                    <p className="contact__description">
                        Book a demo to see how our PropTech solutions can help you
                        generate more leads, close more deals, and scale your operations.
                    </p>
                    <div className="contact__actions">
                        <motion.a
                            href="mailto:michaelragu@logichq.tech"
                            className="btn-primary contact__btn"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Get Started
                            <HiArrowRight />
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div
                    className="contact__visual"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <a href="mailto:michaelragu@logichq.tech" className="contact__card">
                        <div className="contact__card-icon">
                            <HiMail size={24} />
                        </div>
                        <div className="contact__card-content">
                            <span>Email Us</span>
                            <strong>michaelragu@logichq.tech</strong>
                        </div>
                    </a>
                    <a href="tel:+263784030449" className="contact__card">
                        <div className="contact__card-icon">
                            <HiPhone size={24} />
                        </div>
                        <div className="contact__card-content">
                            <span>Call Us</span>
                            <strong>+263 784 030 449</strong>
                        </div>
                    </a>
                    <div className="contact__card">
                        <div className="contact__card-icon">
                            <HiLocationMarker size={24} />
                        </div>
                        <div className="contact__card-content">
                            <span>Visit Our Office</span>
                            <strong>Harare, Zimbabwe</strong>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Background Image */}
            <div className="contact__bg">
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=600&fit=crop"
                    alt="Modern building"
                    className="contact__bg-image"
                />
            </div>
        </section>
    );
}
