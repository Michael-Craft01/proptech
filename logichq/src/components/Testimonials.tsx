import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiStar, HiChevronLeft, HiChevronRight, HiOfficeBuilding } from 'react-icons/hi';
import './Testimonials.css';

const testimonials = [
    {
        quote: "LogicHQ transformed our entire property management process. We now respond to inquiries 5x faster and have closed 40% more deals since implementation.",
        name: "Tendai Moyo",
        title: "Director, Premier Realty",
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
        rating: 5,
    },
    {
        quote: "The CRM system they built has become the backbone of our sales team. Lead tracking and follow-ups are now completely automated.",
        name: "Lerato Khumalo",
        title: "CEO, Urban Properties",
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
        rating: 5,
    },
    {
        quote: "Their AI chatbot handles hundreds of inquiries daily. It's like having a 24/7 sales team that never sleeps. Incredible ROI.",
        name: "Sipho Dube",
        title: "Managing Director, Sunrise Estates",
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
        rating: 5,
    },
    {
        quote: "We were skeptical at first, but LogicHQ delivered beyond expectations. Our property listings now rank #1 on Google.",
        name: "Chipo Nyathi",
        title: "Founder, Prime Property Group",
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
        rating: 5,
    },
    {
        quote: "The tenant portal they built reduced our admin workload by 60%. Rent collection and maintenance requests are now seamless.",
        name: "Themba Nkosi",
        title: "Property Manager, Highveld Rentals",
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
        rating: 5,
    },
    {
        quote: "Professional, responsive, and they truly understand real estate. Our custom dashboard gives us insights we never had before.",
        name: "Nonhlanhla Dlamini",
        title: "COO, Parklands Development",
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face',
        rating: 5,
    },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    // Auto-advance carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const navigate = (dir: number) => {
        setDirection(dir);
        if (dir === 1) {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        } else {
            setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        }
    };

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -300 : 300,
            opacity: 0,
        }),
    };

    const current = testimonials[currentIndex];

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

                <div className="testimonials__carousel">
                    <button
                        className="testimonials__nav testimonials__nav--prev"
                        onClick={() => navigate(-1)}
                        aria-label="Previous testimonial"
                    >
                        <HiChevronLeft size={24} />
                    </button>

                    <div className="testimonials__content">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={currentIndex}
                                className="testimonial-slide"
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                <div className="testimonial-slide__rating">
                                    {[...Array(current.rating)].map((_, i) => (
                                        <HiStar key={i} className="testimonial-slide__star" />
                                    ))}
                                </div>
                                <blockquote className="testimonial-slide__quote">
                                    "{current.quote}"
                                </blockquote>
                                <div className="testimonial-slide__author">
                                    <img
                                        src={current.image}
                                        alt={current.name}
                                        className="testimonial-slide__avatar"
                                    />
                                    <div className="testimonial-slide__info">
                                        <span className="testimonial-slide__name">{current.name}</span>
                                        <span className="testimonial-slide__title">
                                            <HiOfficeBuilding className="testimonial-slide__title-icon" />
                                            {current.title}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button
                        className="testimonials__nav testimonials__nav--next"
                        onClick={() => navigate(1)}
                        aria-label="Next testimonial"
                    >
                        <HiChevronRight size={24} />
                    </button>
                </div>

                {/* Dots Indicator */}
                <div className="testimonials__dots">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`testimonials__dot ${index === currentIndex ? 'testimonials__dot--active' : ''}`}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
