import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiPlus, HiMinus } from 'react-icons/hi';
import './FAQ.css';

const faqs = [
    {
        question: 'How long does it take to build a custom solution?',
        answer: 'Most projects take 4-12 weeks depending on complexity. A simple website might be 4 weeks, while a full property management platform could be 8-12 weeks. We provide a detailed timeline after our discovery call.',
    },
    {
        question: 'What if I already have systems in place?',
        answer: 'No problem. We specialize in integrations. We can connect to your existing CRM, accounting software, or listing platforms. Our goal is to enhance your workflow, not replace everything.',
    },
    {
        question: 'Do you provide ongoing support after launch?',
        answer: 'Absolutely. We offer flexible support packages including bug fixes, feature updates, and 24/7 monitoring. Most clients choose our monthly retainer for peace of mind.',
    },
    {
        question: 'How much does a typical project cost?',
        answer: 'Projects range from $3,000 for a professional website to $15,000+ for complex platforms. We provide transparent quotes with no hidden fees. Every project includes a detailed scope document.',
    },
    {
        question: 'Can you work with clients outside Zimbabwe?',
        answer: 'Yes! We work with real estate companies across Africa and internationally. All communication happens remotely via video calls, and we adjust to your timezone.',
    },
    {
        question: 'What makes you different from other developers?',
        answer: 'We specialize exclusively in PropTech. We understand real estate workflows, lead generation, and property management—not just code. This domain expertise means faster delivery and better solutions.',
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq">
            <div className="faq__container">
                <motion.div
                    className="faq__header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h2>
                    <p className="section-subtitle">
                        Got questions? We've got answers. If you don't see yours here, just ask.
                    </p>
                </motion.div>

                <motion.div
                    className="faq__list"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'faq-item--open' : ''}`}
                        >
                            <button
                                className="faq-item__question"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={openIndex === index}
                            >
                                <span>{faq.question}</span>
                                {openIndex === index ? <HiMinus size={20} /> : <HiPlus size={20} />}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        className="faq-item__answer"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p>{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
