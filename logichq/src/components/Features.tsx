import { motion } from 'framer-motion';
import { HiHome, HiSearchCircle, HiChartBar } from 'react-icons/hi';
import './Features.css';

const features = [
    {
        icon: HiSearchCircle,
        title: 'Smart Search',
        description: 'AI-powered property matching that understands your preferences and finds your perfect home.',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop',
    },
    {
        icon: HiHome,
        title: 'Virtual Tours',
        description: 'Explore properties from anywhere with immersive 360° virtual tours and HD galleries.',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop',
    },
    {
        icon: HiChartBar,
        title: 'Market Insights',
        description: 'Real-time property valuations and market trends to help you make informed decisions.',
        image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=400&h=300&fit=crop',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

export default function Features() {
    return (
        <section id="about" className="features">
            <div className="features__container">
                <motion.div
                    className="features__header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">
                        Why Choose
                        <span className="gradient-text"> LogicHQ</span>
                    </h2>
                    <p className="section-subtitle">
                        We combine technology and real estate expertise to deliver
                        exceptional property experiences.
                    </p>
                </motion.div>

                <motion.div
                    className="features__grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="feature-card"
                            variants={itemVariants}
                        >
                            <div className="feature-card__image-wrapper">
                                <img src={feature.image} alt={feature.title} className="feature-card__image" />
                                <div className="feature-card__icon-badge">
                                    <feature.icon size={24} />
                                </div>
                            </div>
                            <div className="feature-card__content">
                                <h3 className="feature-card__title">{feature.title}</h3>
                                <p className="feature-card__description">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
