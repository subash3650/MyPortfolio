"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaInstagram, FaCode } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
    return (
        <section
            id="about"
            className="relative py-20 md:py-32 bg-gradient-to-b from-gray-900 to-black"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden">
                            <Image
                                src="/images/subash.jpg"
                                alt="Subash - Full-Stack Developer"
                                fill
                                className="object-cover"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-transparent" />
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -z-10 top-8 right-8 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl" />
                        <div className="absolute -z-10 bottom-8 left-8 w-60 h-60 bg-teal-600/20 rounded-full blur-3xl" />
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                                <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
                                    About Me
                                </span>
                            </h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full mb-6" />
                        </div>

                        <div className="space-y-4 text-gray-300 leading-relaxed">
                            <p className="text-lg">
                                Hello Everyone, I am <span className="text-teal-400 font-semibold">SUBASH</span> currently
                                studying B.Tech Computer Science and Business Systems at Chennai Institute of Technology.
                            </p>
                            <p>
                                Full-stack developer and engineering student passionate about building scalable web
                                applications and AI-driven solutions. Experienced in front-end and back-end development,
                                with a strong interest in AI-based power demand forecasting.
                            </p>
                            <p>
                                Enthusiastic about Linux, cybersecurity, and leveraging technology to solve real-world
                                problems. Aspiring entrepreneur, eager to create impactful and innovative tech products.
                            </p>
                        </div>

                        {/* Skills/Specialties */}
                        <div className="grid grid-cols-1 gap-4 pt-4">
                            <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                                <h4 className="text-teal-400 font-semibold mb-2">Development</h4>
                                <p className="text-sm text-gray-400">Full-Stack, Web Development, AI/ML Solutions</p>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-3 pt-4">
                            <div className="flex items-center gap-3 text-gray-300">
                                <FiMail className="text-teal-400" size={20} />
                                <a href="mailto:subashprsanna66@gmail.com" className="hover:text-teal-400 transition-colors">
                                    subashprsanna66@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <FiPhone className="text-teal-400" size={20} />
                                <a href="tel:+919345242991" className="hover:text-teal-400 transition-colors">
                                    +91 93452 42991
                                </a>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <FiMapPin className="text-teal-400" size={20} />
                                <span>Chennai, India</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 pt-4">
                            <a
                                href="https://github.com/subash3650"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-800 hover:bg-teal-500 text-gray-300 hover:text-white rounded-full transition-all duration-300"
                                aria-label="GitHub"
                            >
                                <FaGithub size={24} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/subash365/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-800 hover:bg-teal-500 text-gray-300 hover:text-white rounded-full transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin size={24} />
                            </a>
                            <a
                                href="https://www.instagram.com/__._subash__/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-800 hover:bg-teal-500 text-gray-300 hover:text-white rounded-full transition-all duration-300"
                                aria-label="Instagram"
                            >
                                <FaInstagram size={24} />
                            </a>
                            <a
                                href="https://leetcode.com/subash0910"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-800 hover:bg-teal-500 text-gray-300 hover:text-white rounded-full transition-all duration-300"
                                aria-label="LeetCode"
                            >
                                <SiLeetcode size={24} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
