import { motion } from 'framer-motion';
import {
    HiExclamationCircle,
    HiDocumentDuplicate,
    HiClock,
    HiDesktopComputer,
    HiRefresh,
    HiGlobe
} from 'react-icons/hi';
import './Challenges.css';

const challenges = [
    {
        icon: HiDocumentDuplicate,
        title: 'Scattered Property Listings',
        description: 'Properties spread across multiple platforms with no central management.',
    },
    {
        icon: HiExclamationCircle,
        title: 'Missed Inquiries',
        description: 'Potential buyers slip away due to slow or no response to queries.',
    },
    {
        icon: HiClock,
        title: 'Slow Response Times',
        description: 'Manual processes delay responses and frustrate potential clients.',
    },
    {
        icon: HiDesktopComputer,
        title: 'No Centralized System',
        description: 'Data scattered in spreadsheets, emails, and paper files.',
    },
    {
        icon: HiRefresh,
        title: 'Manual Processes',
        description: 'Time wasted on repetitive tasks that could be automated.',
    },
    {
        icon: HiGlobe,
        title: 'Poor Online Presence',
        description: 'Outdated websites that fail to attract modern buyers.',
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

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

export default function Challenges() {
    return (
        <section id="challenges" className="challenges">
            <div className="challenges__container">
                <motion.div
                    className="challenges__header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">
                        Challenges <span className="gradient-text">We Solve</span>
                    </h2>
                    <p className="section-subtitle">
                        Real estate businesses face common problems that hold them back.
                        We understand these challenges because we've solved them.
                    </p>
                </motion.div>

                <motion.div
                    className="challenges__grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {challenges.map((challenge, index) => (
                        <motion.div
                            key={index}
                            className="challenge-card"
                            variants={itemVariants}
                        >
                            <div className="challenge-card__icon">
                                <challenge.icon size={24} />
                            </div>
                            <div className="challenge-card__content">
                                <h3 className="challenge-card__title">{challenge.title}</h3>
                                <p className="challenge-card__description">{challenge.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
