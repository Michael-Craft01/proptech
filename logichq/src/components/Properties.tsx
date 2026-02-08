import { motion } from 'framer-motion';
import { HiLocationMarker, HiHome, HiCurrencyDollar } from 'react-icons/hi';
import './Properties.css';

const properties = [
    {
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop',
        title: 'Modern Family Villa',
        location: 'Borrowdale, Harare',
        price: '$450,000',
        beds: 4,
        baths: 3,
        sqft: '3,200',
        tag: 'For Sale',
    },
    {
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop',
        title: 'Luxury Penthouse',
        location: 'Avondale, Harare',
        price: '$2,500/mo',
        beds: 3,
        baths: 2,
        sqft: '2,100',
        tag: 'For Rent',
    },
    {
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
        title: 'Contemporary Home',
        location: 'Mount Pleasant, Harare',
        price: '$380,000',
        beds: 3,
        baths: 2,
        sqft: '2,800',
        tag: 'For Sale',
    },
    {
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop',
        title: 'Elegant Estate',
        location: 'Glen Lorne, Harare',
        price: '$720,000',
        beds: 5,
        baths: 4,
        sqft: '4,500',
        tag: 'Featured',
    },
    {
        image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&h=400&fit=crop',
        title: 'Garden Apartment',
        location: 'Highlands, Harare',
        price: '$1,800/mo',
        beds: 2,
        baths: 1,
        sqft: '1,200',
        tag: 'For Rent',
    },
    {
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop',
        title: 'Lakeside Retreat',
        location: 'Chishawasha, Harare',
        price: '$520,000',
        beds: 4,
        baths: 3,
        sqft: '3,600',
        tag: 'New',
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

export default function Properties() {
    return (
        <section id="properties" className="properties">
            <div className="properties__container">
                <motion.div
                    className="properties__header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">
                        Featured <span className="gradient-text">Properties</span>
                    </h2>
                    <p className="section-subtitle">
                        Discover premium properties handpicked for quality and value.
                    </p>
                </motion.div>

                <motion.div
                    className="properties__grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {properties.map((property, index) => (
                        <motion.div
                            key={index}
                            className="property-card"
                            variants={cardVariants}
                            whileHover={{ y: -8 }}
                        >
                            <div className="property-card__image-wrapper">
                                <img src={property.image} alt={property.title} className="property-card__image" />
                                <span className={`property-card__tag property-card__tag--${property.tag.toLowerCase().replace(' ', '-')}`}>
                                    {property.tag}
                                </span>
                            </div>
                            <div className="property-card__content">
                                <div className="property-card__price">
                                    <HiCurrencyDollar />
                                    <span>{property.price}</span>
                                </div>
                                <h3 className="property-card__title">{property.title}</h3>
                                <p className="property-card__location">
                                    <HiLocationMarker />
                                    {property.location}
                                </p>
                                <div className="property-card__features">
                                    <span><HiHome /> {property.beds} Beds</span>
                                    <span>{property.baths} Baths</span>
                                    <span>{property.sqft} sqft</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="properties__cta"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <a href="#contact" className="btn-primary">
                        View All Properties
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
