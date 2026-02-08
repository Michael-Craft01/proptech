import { motion } from 'framer-motion';
import { HiOfficeBuilding } from 'react-icons/hi';
import './ClientLogos.css';

// Placeholder client logos - in production, use actual client logos
const clients = [
    { name: 'Premier Realty', initial: 'PR' },
    { name: 'Urban Properties', initial: 'UP' },
    { name: 'Sunrise Estates', initial: 'SE' },
    { name: 'Prime Property Group', initial: 'PP' },
    { name: 'Highveld Rentals', initial: 'HR' },
    { name: 'Parklands Development', initial: 'PD' },
];

export default function ClientLogos() {
    return (
        <section className="client-logos">
            <div className="client-logos__container">
                <motion.p
                    className="client-logos__label"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Trusted by leading real estate companies across Africa
                </motion.p>

                <motion.div
                    className="client-logos__grid"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {clients.map((client, index) => (
                        <div key={index} className="client-logo">
                            <HiOfficeBuilding className="client-logo__icon" />
                            <span className="client-logo__name">{client.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
