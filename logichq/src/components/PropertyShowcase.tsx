import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import './PropertyShowcase.css';

const expertiseAreas = [
    {
        title: 'Property Sales',
        description: 'Listing platforms, virtual tours, and instant valuations',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop',
    },
    {
        title: 'Rental Management',
        description: 'Tenant portals, payments, and maintenance tracking',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop',
    },
    {
        title: 'Commercial Real Estate',
        description: 'Portfolio management and investor dashboards',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop',
    },
    {
        title: 'Property Development',
        description: 'Project tracking and buyer pipelines',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=500&fit=crop',
    },
    {
        title: 'Real Estate Agencies',
        description: 'Agent CRM, lead scoring, and automation',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function PropertyShowcase() {
    return (
        <section className="expertise">
            <div className="expertise__container">
                {/* Header */}
                <motion.div
                    className="expertise__header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="expertise__label">Industries We Serve</span>
                    <h2 className="expertise__title">
                        We Build for <span className="gradient-text">Every</span> Real Estate Vertical
                    </h2>
                </motion.div>

                {/* Bento Grid */}
                <motion.div
                    className="expertise__bento"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {expertiseAreas.map((area, index) => (
                        <motion.div
                            key={index}
                            className={`expertise__card expertise__card--${index + 1}`}
                            variants={itemVariants}
                        >
                            <img src={area.image} alt={area.title} className="expertise__card-image" />
                            <div className="expertise__card-overlay" />
                            <div className="expertise__card-content">
                                <h3 className="expertise__card-title">{area.title}</h3>
                                <p className="expertise__card-description">{area.description}</p>
                                <a href="#contact" className="expertise__card-link">
                                    Build for me <HiArrowRight />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
