import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import './Team.css';

const team = [
    {
        name: 'Michael Ragu',
        role: 'Founder & Lead Engineer',
        bio: 'Full-stack developer with 5+ years building enterprise software for real estate businesses.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
        linkedin: '#',
    },
    {
        name: 'Tendai Chikomo',
        role: 'Senior Developer',
        bio: 'Backend specialist focused on scalable property management systems and API integrations.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
        linkedin: '#',
    },
    {
        name: 'Rudo Moyo',
        role: 'UI/UX Designer',
        bio: 'Creating intuitive interfaces that real estate professionals love to use every day.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face',
        linkedin: '#',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Team() {
    return (
        <section id="about" className="team">
            <div className="team__container">
                <motion.div
                    className="team__header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">
                        Meet the <span className="gradient-text">Team</span>
                    </h2>
                    <p className="section-subtitle">
                        Real people, real expertise. We're not a faceless agency—we're your technology partners.
                    </p>
                </motion.div>

                <motion.div
                    className="team__grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            className="team-card"
                            variants={cardVariants}
                        >
                            <div className="team-card__image-wrapper">
                                <img src={member.image} alt={member.name} className="team-card__image" />
                            </div>
                            <div className="team-card__content">
                                <h3 className="team-card__name">{member.name}</h3>
                                <span className="team-card__role">{member.role}</span>
                                <p className="team-card__bio">{member.bio}</p>
                                <div className="team-card__social">
                                    <a href={member.linkedin} className="team-card__link" aria-label="LinkedIn">
                                        <FaLinkedin size={18} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
