import { motion } from 'framer-motion';
import { HiStar, HiOfficeBuilding } from 'react-icons/hi';
import './Testimonials.css';

const testimonials = [
    {
        quote: "LogicHQ transformed our entire property management process. We now respond to inquiries 5x faster and close more deals.",
        name: "Tendai Moyo",
        title: "Director, Premier Realty",
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
        rating: 5,
    },
    {
        quote: "The CRM system they built has become the backbone of our sales team. We've seen a 40% increase in conversions.",
        name: "Lerato Khumalo",
        title: "CEO, Urban Properties",
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
        rating: 5,
    },
    {
        quote: "Their AI chatbot handles hundreds of inquiries daily. It's like having a 24/7 sales team that never sleeps.",
        name: "Sipho Dube",
        title: "Managing Director, Sunrise Estates",
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
        rating: 5,
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

const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5 },
    },
};

export default function Testimonials() {
    return (
        <section className="testimonials">
            <div className="testimonials__container">
                <motion.div
                    className="testimonials__header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">
                        Trusted by <span className="gradient-text">Industry Leaders</span>
                    </h2>
                    <p className="section-subtitle">
                        Real estate professionals who have transformed their businesses with our technology.
                    </p>
                </motion.div>

                <motion.div
                    className="testimonials__grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="testimonial-card glass-card"
                            variants={cardVariants}
                        >
                            <div className="testimonial-card__rating">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <HiStar key={i} className="testimonial-card__star" />
                                ))}
                            </div>
                            <blockquote className="testimonial-card__quote">
                                "{testimonial.quote}"
                            </blockquote>
                            <div className="testimonial-card__author">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="testimonial-card__avatar-img"
                                />
                                <div className="testimonial-card__info">
                                    <span className="testimonial-card__name">{testimonial.name}</span>
                                    <span className="testimonial-card__title">
                                        <HiOfficeBuilding className="testimonial-card__title-icon" />
                                        {testimonial.title}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
