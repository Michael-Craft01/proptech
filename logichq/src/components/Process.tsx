import { motion } from 'framer-motion';
import { HiChat, HiLightBulb, HiCode, HiArrowRight } from 'react-icons/hi';
import './Process.css';

const steps = [
    {
        number: '01',
        icon: HiChat,
        title: 'Discovery Call',
        description: 'We learn about your business, challenges, and goals. No sales pitch, just understanding.',
    },
    {
        number: '02',
        icon: HiLightBulb,
        title: 'Solution Design',
        description: 'We propose a tailored solution with clear deliverables, timeline, and transparent pricing.',
    },
    {
        number: '03',
        icon: HiCode,
        title: 'Development',
        description: 'We build your solution with regular updates, so you always know the progress.',
    },
    {
        number: '04',
        icon: HiArrowRight,
        title: 'Launch & Support',
        description: 'We deploy, train your team, and provide ongoing support to ensure success.',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Process() {
    return (
        <section id="process" className="process">
            <div className="process__container">
                <motion.div
                    className="process__header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">
                        How We <span className="gradient-text">Work</span>
                    </h2>
                    <p className="section-subtitle">
                        A transparent, collaborative process designed to deliver results.
                    </p>
                </motion.div>

                <motion.div
                    className="process__timeline"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="process-step"
                            variants={itemVariants}
                        >
                            <div className="process-step__number">{step.number}</div>
                            <div className="process-step__icon">
                                <step.icon size={24} />
                            </div>
                            <div className="process-step__content">
                                <h3 className="process-step__title">{step.title}</h3>
                                <p className="process-step__description">{step.description}</p>
                            </div>
                            {index < steps.length - 1 && <div className="process-step__connector" />}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
