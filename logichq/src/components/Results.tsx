import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { HiTrendingUp, HiLightningBolt, HiCollection, HiChartBar } from 'react-icons/hi';
import './Results.css';

const results = [
    {
        icon: HiLightningBolt,
        value: 3,
        suffix: 'x',
        label: 'Faster Response Times',
        description: 'Automated responses to inquiries'
    },
    {
        icon: HiTrendingUp,
        value: 60,
        suffix: '%',
        label: 'More Qualified Leads',
        description: 'Through targeted landing pages'
    },
    {
        icon: HiCollection,
        value: 100,
        suffix: '%',
        label: 'Centralized Operations',
        description: 'All data in one platform'
    },
    {
        icon: HiChartBar,
        value: 40,
        suffix: '%',
        label: 'Increased Conversions',
        description: 'With optimized workflows'
    },
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

export default function Results() {
    return (
        <section className="results">
            <div className="results__container">
                <motion.div
                    className="results__header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">
                        Measurable <span className="gradient-text">Results</span>
                    </h2>
                    <p className="section-subtitle">
                        Our solutions deliver tangible business outcomes for real estate companies.
                    </p>
                </motion.div>

                <motion.div
                    className="results__grid"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {results.map((result, index) => (
                        <div key={index} className="result-card">
                            <div className="result-card__icon">
                                <result.icon size={24} />
                            </div>
                            <span className="result-card__value gradient-text">
                                <AnimatedCounter value={result.value} suffix={result.suffix} />
                            </span>
                            <span className="result-card__label">{result.label}</span>
                            <span className="result-card__description">{result.description}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
