import { motion } from 'framer-motion';
import './AtWork.css';

const workImages = [
    {
        src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop',
        alt: 'Team collaboration meeting',
        caption: 'Strategic Planning',
        description: 'Aligning vision with execution',
    },
    {
        src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop',
        alt: 'Developer coding',
        caption: 'Building Solutions',
        description: 'Crafting code that scales',
    },
    {
        src: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=800&h=600&fit=crop',
        alt: 'Team discussion',
        caption: 'Client Collaboration',
        description: 'Your success is our mission',
    },
    {
        src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop',
        alt: 'Business meeting',
        caption: 'Discovery Sessions',
        description: 'Understanding your challenges',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const imageVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AtWork() {
    return (
        <section className="at-work">
            <div className="at-work__container">
                <motion.div
                    className="at-work__header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="at-work__label">Behind the Scenes</span>
                    <h2 className="at-work__title">
                        Real People. Real <span className="gradient-text">Impact</span>.
                    </h2>
                    <p className="at-work__subtitle">
                        We're not just developers—we're strategic partners invested in your growth.
                    </p>
                </motion.div>

                <motion.div
                    className="at-work__grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {workImages.map((image, index) => (
                        <motion.div
                            key={index}
                            className="at-work__card"
                            variants={imageVariants}
                        >
                            <div className="at-work__image-wrapper">
                                <img src={image.src} alt={image.alt} />
                                <div className="at-work__image-overlay" />
                            </div>
                            <div className="at-work__card-content">
                                <h3 className="at-work__card-title">{image.caption}</h3>
                                <p className="at-work__card-description">{image.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats Bar */}
                <motion.div
                    className="at-work__stats"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="at-work__stat">
                        <span className="at-work__stat-number">100%</span>
                        <span className="at-work__stat-label">Remote Team</span>
                    </div>
                    <div className="at-work__stat-divider" />
                    <div className="at-work__stat">
                        <span className="at-work__stat-number">Agile</span>
                        <span className="at-work__stat-label">Development Process</span>
                    </div>
                    <div className="at-work__stat-divider" />
                    <div className="at-work__stat">
                        <span className="at-work__stat-number">Weekly</span>
                        <span className="at-work__stat-label">Progress Updates</span>
                    </div>
                    <div className="at-work__stat-divider" />
                    <div className="at-work__stat">
                        <span className="at-work__stat-number">Direct</span>
                        <span className="at-work__stat-label">Client Access</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
