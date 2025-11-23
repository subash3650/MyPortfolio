"use client";

import { motion } from "framer-motion";
import CertificateCard from "./CertificateCard";
import { Certificate } from "@/types";
import { useState } from "react";

interface CertificatesProps {
    certificates: Certificate[];
}

const Certificates: React.FC<CertificatesProps> = ({ certificates }) => {
    const [showAll, setShowAll] = useState(false);
    const INITIAL_DISPLAY_COUNT = 5;

    const displayedCertificates = showAll
        ? certificates
        : certificates.slice(0, INITIAL_DISPLAY_COUNT);

    const hasMore = certificates.length > INITIAL_DISPLAY_COUNT;

    return (
        <section
            id="certificates"
            className="relative py-20 md:py-32 bg-black"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
                            Certifications
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Professional certifications and achievements that demonstrate my
                        commitment to continuous learning and excellence.
                    </p>
                </motion.div>

                {/* Certificates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedCertificates.length > 0 ? (
                        displayedCertificates.map((certificate, index) => (
                            <CertificateCard key={certificate.id} certificate={certificate} index={index} />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <p className="text-gray-500">
                                No certificates available at the moment.
                            </p>
                        </div>
                    )}
                </div>

                {/* See More Button */}
                {hasMore && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowAll(!showAll)}
                            className="px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300"
                        >
                            {showAll ? "Show Less" : `See More (${certificates.length - INITIAL_DISPLAY_COUNT} more)`}
                        </motion.button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Certificates;
