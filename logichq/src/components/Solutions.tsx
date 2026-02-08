import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import './Solutions.css';

const solutionCategories = [
    {
        category: 'Digital Presence',
        solutions: [
            {
                title: 'Property Listing Platforms',
                description: 'IDX-integrated websites with advanced search and instant lead capture',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
            },
            {
                title: 'Real Estate Websites',
                description: 'Premium, conversion-optimized websites for agencies and developers',
                image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
            },
            {
                title: 'Mobile Applications',
                description: 'Native iOS & Android apps for agents, tenants, and buyers',
                image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
            },
        ],
    },
    {
        category: 'Operations & Management',
        solutions: [
            {
                title: 'Property Management Systems',
                description: 'End-to-end tenant, lease, and maintenance management',
                image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop',
            },
            {
                title: 'Real Estate CRM',
                description: 'Pipeline management, lead scoring, and agent performance tracking',
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
            },
            {
                title: 'Transaction Management',
                description: 'Digital contracts, e-signatures, and compliance workflows',
                image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop',
            },
        ],
    },
    {
        category: 'AI & Automation',
        solutions: [
            {
                title: 'AI Chatbots & Assistants',
                description: '24/7 lead qualification, property matching, and viewing scheduling',
                image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
            },
            {
                title: 'Marketing Automation',
                description: 'Email campaigns, social scheduling, and listing syndication',
                image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&h=400&fit=crop',
            },
            {
                title: 'Document Automation',
                description: 'Auto-generated leases, contracts, and compliance documents',
                image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop',
            },
        ],
    },
    {
        category: 'Data & Intelligence',
        solutions: [
            {
                title: 'Analytics Dashboards',
                description: 'Real-time insights, portfolio performance, and market trends',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
            },
            {
                title: 'Predictive Analytics',
                description: 'Property valuations, market forecasting, and investment analysis',
                image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&h=400&fit=crop',
            },
            {
                title: 'Tenant Screening',
                description: 'Background checks, credit scoring, and risk assessment',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
            },
        ],
    },
    {
        category: 'Immersive Experience',
        solutions: [
            {
                title: 'Virtual Tours & 3D',
                description: 'Interactive walkthroughs, floor plans, and drone footage',
                image: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?w=600&h=400&fit=crop',
            },
            {
                title: 'AR Property Staging',
                description: 'Augmented reality furniture placement and interior design',
                image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
            },
            {
                title: 'Interactive Maps',
                description: 'Neighborhood insights, amenities, and commute analysis',
                image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop',
            },
        ],
    },
    {
        category: 'Brand & Growth',
        solutions: [
            {
                title: 'Brand Identity Design',
                description: 'Logo, guidelines, and complete visual identity systems',
                image: 'https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=600&h=400&fit=crop',
            },
            {
                title: 'SEO & Content Strategy',
                description: 'Search optimization, blog strategy, and content marketing',
                image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=400&fit=crop',
            },
            {
                title: 'Lead Generation Systems',
                description: 'Landing pages, funnels, and paid advertising campaigns',
                image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
            },
        ],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Solutions() {
    return (
        <section id="solutions" className="solutions">
            <div className="solutions__container">
                {/* Header */}
                <motion.div
                    className="solutions__header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="solutions__label">The Complete PropTech Stack</span>
                    <h2 className="solutions__title">
                        A Whole World of <span className="gradient-text">Solutions</span>
                    </h2>
                    <p className="solutions__subtitle">
                        18+ enterprise solutions across 6 categories—everything you need to dominate your market.
                    </p>
                </motion.div>

                {/* Categories */}
                <div className="solutions__categories">
                    {solutionCategories.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            className="solutions__category"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                        >
                            <div className="solutions__category-header">
                                <span className="solutions__category-number">0{catIndex + 1}</span>
                                <h3 className="solutions__category-title">{category.category}</h3>
                            </div>

                            <motion.div
                                className="solutions__category-grid"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {category.solutions.map((solution, solIndex) => (
                                    <motion.div
                                        key={solIndex}
                                        className="solution-card"
                                        variants={cardVariants}
                                        whileHover={{ y: -8 }}
                                    >
                                        <div className="solution-card__image">
                                            <img src={solution.image} alt={solution.title} />
                                            <div className="solution-card__image-overlay" />
                                        </div>
                                        <div className="solution-card__content">
                                            <h4 className="solution-card__title">{solution.title}</h4>
                                            <p className="solution-card__description">{solution.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    className="solutions__cta"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="solutions__cta-content">
                        <h3>Ready to Build Your PropTech Empire?</h3>
                        <p>Let's discuss which solutions will transform your business.</p>
                    </div>
                    <a href="#contact" className="btn-primary solutions__cta-btn">
                        Schedule a Discovery Call
                        <HiArrowRight />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
