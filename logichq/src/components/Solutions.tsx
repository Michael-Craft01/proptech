import { motion } from 'framer-motion';
import {
    HiServer,
    HiGlobe,
    HiDeviceMobile,
    HiChat,
    HiUserGroup,
    HiLightningBolt,
    HiChartBar
} from 'react-icons/hi';
import './Solutions.css';

const solutions = [
    {
        icon: HiServer,
        title: 'Property Management Platforms',
        description: 'Centralized systems to manage listings, tenants, and property operations.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
    },
    {
        icon: HiGlobe,
        title: 'Custom Real Estate Websites',
        description: 'Modern, SEO-optimized websites that showcase properties and generate leads.',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
    },
    {
        icon: HiDeviceMobile,
        title: 'Mobile Applications',
        description: 'iOS and Android apps for agents, tenants, and property managers.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop',
    },
    {
        icon: HiChat,
        title: 'AI Chatbots',
        description: 'Intelligent bots that handle inquiries, qualify leads, and book viewings 24/7.',
        image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&h=300&fit=crop',
    },
    {
        icon: HiUserGroup,
        title: 'CRM Systems',
        description: 'Track leads, manage relationships, and close more deals with customized CRMs.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    },
    {
        icon: HiChartBar,
        title: 'Analytics Dashboards',
        description: 'Real-time insights on leads, listings, and business performance.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

export default function Solutions() {
    return (
        <section id="solutions" className="solutions">
            <div className="solutions__container">
                <motion.div
                    className="solutions__header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">
                        Our <span className="gradient-text">Solutions</span>
                    </h2>
                    <p className="section-subtitle">
                        Technology built specifically for real estate businesses.
                        Each solution is designed to solve real problems and deliver measurable results.
                    </p>
                </motion.div>

                <motion.div
                    className="solutions__grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            className="solution-card"
                            variants={cardVariants}
                            whileHover={{ y: -8 }}
                        >
                            <div className="solution-card__image-wrapper">
                                <img src={solution.image} alt={solution.title} className="solution-card__image" />
                                <div className="solution-card__icon-badge">
                                    <solution.icon size={24} />
                                </div>
                            </div>
                            <div className="solution-card__content">
                                <h3 className="solution-card__title">{solution.title}</h3>
                                <p className="solution-card__description">{solution.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
