import { motion } from 'framer-motion';
import {
    HiCode,
    HiCloud,
    HiShieldCheck,
    HiLightningBolt,
    HiCube,
    HiDatabase
} from 'react-icons/hi';
import { FaReact, FaNodeJs, FaPython, FaAws } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiOpenai, SiNextdotjs } from 'react-icons/si';
import './Technology.css';

const techCapabilities = [
    {
        icon: HiCode,
        title: 'Custom Development',
        description: 'Bespoke solutions built from the ground up to match your exact requirements.',
    },
    {
        icon: HiCloud,
        title: 'Cloud Infrastructure',
        description: 'Scalable, secure cloud hosting that grows with your business.',
    },
    {
        icon: HiShieldCheck,
        title: 'Enterprise Security',
        description: 'Bank-grade encryption and security protocols to protect your data.',
    },
    {
        icon: HiLightningBolt,
        title: 'High Performance',
        description: 'Optimized systems that load fast and handle heavy traffic.',
    },
    {
        icon: HiCube,
        title: 'API Integrations',
        description: 'Seamless connections with your existing tools and platforms.',
    },
    {
        icon: HiDatabase,
        title: 'Data Management',
        description: 'Centralized databases with real-time sync and backups.',
    },
];

const techStack = [
    { icon: FaReact, name: 'React' },
    { icon: SiNextdotjs, name: 'Next.js' },
    { icon: SiTypescript, name: 'TypeScript' },
    { icon: FaNodeJs, name: 'Node.js' },
    { icon: FaPython, name: 'Python' },
    { icon: SiPostgresql, name: 'PostgreSQL' },
    { icon: FaAws, name: 'AWS' },
    { icon: SiOpenai, name: 'OpenAI' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Technology() {
    return (
        <section id="technology" className="technology">
            <div className="technology__container">
                <motion.div
                    className="technology__header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">
                        Our <span className="gradient-text">Technology</span>
                    </h2>
                    <p className="section-subtitle">
                        Enterprise-grade technology stack powering real estate businesses across Africa.
                    </p>
                </motion.div>

                {/* Tech Capabilities */}
                <motion.div
                    className="technology__capabilities"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {techCapabilities.map((cap, index) => (
                        <motion.div
                            key={index}
                            className="tech-capability-card"
                            variants={itemVariants}
                        >
                            <div className="tech-capability-card__icon">
                                <cap.icon size={24} />
                            </div>
                            <h3 className="tech-capability-card__title">{cap.title}</h3>
                            <p className="tech-capability-card__description">{cap.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                    className="technology__stack"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h3 className="technology__stack-title">Technology Stack</h3>
                    <div className="technology__stack-grid">
                        {techStack.map((tech, index) => (
                            <motion.div
                                key={index}
                                className="tech-stack-item"
                                whileHover={{ y: -4, scale: 1.05 }}
                            >
                                <tech.icon size={32} />
                                <span>{tech.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Visual - Dashboard Preview */}
                <motion.div
                    className="technology__visual"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="technology__preview">
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop"
                            alt="Analytics Dashboard"
                            className="technology__preview-image"
                        />
                        <div className="technology__preview-overlay">
                            <span>Real-time Analytics Dashboard</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
