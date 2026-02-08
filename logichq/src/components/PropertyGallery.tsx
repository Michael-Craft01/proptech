import { motion } from 'framer-motion';
import './PropertyGallery.css';

const properties = [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=400&h=300&fit=crop',
];

export default function PropertyGallery() {
    return (
        <section className="property-gallery">
            <div className="property-gallery__container">
                <motion.div
                    className="property-gallery__header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">
                        Built for <span className="gradient-text">Properties Like These</span>
                    </h2>
                    <p className="section-subtitle">
                        Our technology powers real estate businesses managing properties across Africa.
                    </p>
                </motion.div>

                <motion.div
                    className="property-gallery__grid"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {properties.map((image, index) => (
                        <motion.div
                            key={index}
                            className="property-gallery__item"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src={image} alt={`Property ${index + 1}`} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
