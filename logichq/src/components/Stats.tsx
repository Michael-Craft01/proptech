import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import './Stats.css';

const stats = [
    { value: 500, suffix: '+', label: 'Properties Listed' },
    { value: 200, suffix: '+', label: 'Happy Clients' },
    { value: 50, suffix: '+', label: 'Expert Agents' },
    { value: 15, suffix: '+', label: 'Years Experience' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const duration = 2000;
            const steps = 60;
            const increment = value / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= value) {
                    setCount(value);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(current));
                }
            }, duration / steps);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
    return (
        <section className="stats">
            {/* Background Image */}
            <div className="stats__bg">
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=600&fit=crop"
                    alt="City skyline"
                    className="stats__bg-image"
                />
                <div className="stats__bg-overlay" />
            </div>

            <div className="stats__container">
                <motion.div
                    className="stats__header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">
                        Trusted by <span className="gradient-text">Thousands</span>
                    </h2>
                </motion.div>

                <motion.div
                    className="stats__grid"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card">
                            <span className="stat-card__value gradient-text">
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                            </span>
                            <span className="stat-card__label">{stat.label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
