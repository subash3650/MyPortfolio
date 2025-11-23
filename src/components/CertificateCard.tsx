"use client";



import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { Certificate } from "@/types";
import Image from "next/image";

interface CertificateCardProps {
    certificate: Certificate;
    index: number;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-800 hover:border-teal-500/50 transition-all duration-300"
        >
            {/* Certificate Thumbnail */}
            <div className="relative h-48 bg-gray-800 overflow-hidden">
                <Image
                    src={certificate.thumbnailUrl || "/images/certificate-placeholder.png"}
                    alt={certificate.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 space-y-3">
                <h3 className="text-lg font-bold text-white group-hover:text-teal-400 transition-colors line-clamp-2">
                    {certificate.name}
                </h3>
                <div className="flex items-center gap-2">
                    <span className="px-3 py-1 text-xs font-medium bg-teal-500/10 text-teal-400 rounded-full border border-teal-500/20">
                        {certificate.company}
                    </span>
                    <span className="text-xs text-gray-500">
                        {new Date(certificate.issueDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                    </span>
                </div>
                <p className="text-gray-400 text-sm line-clamp-2">
                    {certificate.description}
                </p>
                {/* View Certificate Link */}
                <a
                    href={certificate.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-teal-400 hover:text-teal-300 transition-colors mt-2"
                >
                    <span>View Certificate</span>
                    <FiExternalLink size={16} />
                </a>
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent" />
            </div>
        </motion.div>
    );
};

export default CertificateCard;
