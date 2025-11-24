"use client";

import { motion } from "framer-motion";
import { FiCode, FiCpu, FiServer, FiTrendingUp, FiUsers } from "react-icons/fi";

const services = [
    {
        id: "1",
        title: "End-to-End Applications",
        description: "Build robust applications that solve real-world problems — from idea and data model to deployment — with AI/ML where it adds clear value.",
        icon: FiCode,
    },
    {
        id: "2",
        title: "AI & ML Solutions",
        description: "Production-ready NLP, recommendation engines and automation pipelines that turn data into actionable insights.",
        icon: FiCpu,
    },
    {
        id: "3",
        title: "Performance, Deployment & DevOps",
        description: "Scalable deployments, CI/CD, performance tuning and monitoring to keep your product reliable as it grows.",
        icon: FiServer,
    },
    {
        id: "4",
        title: "Consulting & Product Strategy",
        description: "Discovery workshops, roadmaps, and go-to-market advice to turn user problems into validated product plans.",
        icon: FiTrendingUp,
    },
    {
        id: "5",
        title: "Technical Mentoring & Interview Prep",
        description: "Hands-on coaching in algorithms, systems, code reviews and interview simulations to boost technical confidence and hiring outcomes.",
        icon: FiUsers,
    },
];

const Services = () => {
    return (
        <section
            id="services"
            className="relative py-20 md:py-32 bg-black"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
                            Services Offered
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        End-to-end applications tailored to your needs. I build robust apps that solve
                        real-world problems, integrating AI/ML for automation, personalization, and smarter decisions.
                    </p>
                </motion.div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="group relative p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 hover:border-teal-500/50 transition-all duration-300"
                            >

                                <div className="mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                                        <Icon className="text-teal-400 text-3xl" />
                                    </div>
                                </div>


                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {service.description}
                                </p>


                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl">
                                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent rounded-2xl" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
