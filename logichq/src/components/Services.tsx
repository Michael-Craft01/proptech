import { motion } from 'framer-motion';
import {
    HiGlobe,
    HiServer,
    HiLightningBolt,
    HiChartBar
} from 'react-icons/hi';
import './Services.css';

const serviceGroups = [
    {
        title: 'Digital Presence',
        icon: HiGlobe,
        services: [
            'Real estate websites',
            'Landing pages',
            'SEO for property listings',
        ],
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=350&fit=crop',
    },
    {
        title: 'Systems & Platforms',
        icon: HiServer,
        services: [
            'Custom CRMs',
            'Property management systems',
            'Tenant portals',
            'Admin dashboards',
        ],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=350&fit=crop',
    },
    {
        title: 'Automation',
        icon: HiLightningBolt,
        services: [
            'AI chatbots',
            'WhatsApp automation',
            'Lead routing',
            'Follow-up sequences',
        ],
        image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&h=350&fit=crop',
    },
    {
        title: 'Data & Analytics',
        icon: HiChartBar,
        services: [
            'Performance reports',
            'Real-time dashboards',
            'Business intelligence',
        ],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=350&fit=crop',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

export default function Services() {
    return (
        <section id="services" className="services">
            <div className="services__container">
                <motion.div
                    className="services__header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">
                        Our <span className="gradient-text">Services</span>
                    </h2>
                    <p className="section-subtitle">
                        Comprehensive technology solutions grouped by capability.
                        Each service is tailored for real estate businesses.
                    </p>
                </motion.div>

                <motion.div
                    className="services__grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {serviceGroups.map((group, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            variants={cardVariants}
                            whileHover={{ y: -8 }}
                        >
                            <div className="service-card__image-wrapper">
                                <img src={group.image} alt={group.title} className="service-card__image" />
                                <div className="service-card__overlay">
                                    <group.icon size={32} />
                                </div>
                            </div>
                            <div className="service-card__content">
                                <h3 className="service-card__title">{group.title}</h3>
                                <ul className="service-card__list">
                                    {group.services.map((service, i) => (
                                        <li key={i}>{service}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
