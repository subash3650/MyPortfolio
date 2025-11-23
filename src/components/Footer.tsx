"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaHeart } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
    return (
        <footer className="bg-black border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
                            Subash
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Making the society more advanced.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-white font-semibold">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#hero" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#portfolio" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div className="space-y-4">
                        <h4 className="text-white font-semibold">Connect</h4>
                        <div className="space-y-2 text-sm text-gray-400">
                            <p>subashprsanna66@gmail.com</p>
                            <p>+91 93452 42991</p>
                            <p>Chennai, India</p>
                        </div>
                        <div className="flex items-center gap-3 pt-2">
                            <a
                                href="https://github.com/subash3650"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-gray-800 hover:bg-teal-500 text-gray-300 hover:text-white rounded-lg transition-all"
                                aria-label="GitHub"
                            >
                                <FaGithub size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/subash365/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-gray-800 hover:bg-teal-500 text-gray-300 hover:text-white rounded-lg transition-all"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin size={20} />
                            </a>
                            <a
                                href="https://www.instagram.com/__._subash__/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-gray-800 hover:bg-teal-500 text-gray-300 hover:text-white rounded-lg transition-all"
                                aria-label="Instagram"
                            >
                                <FaInstagram size={20} />
                            </a>
                            <a
                                href="https://leetcode.com/subash0910"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-gray-800 hover:bg-teal-500 text-gray-300 hover:text-white rounded-lg transition-all"
                                aria-label="LeetCode"
                            >
                                <SiLeetcode size={20} />
                            </a>
                            <a
                                href="mailto:subashprsanna66@gmail.com"
                                className="p-2 bg-gray-800 hover:bg-teal-500 text-gray-300 hover:text-white rounded-lg transition-all"
                                aria-label="Email"
                            >
                                <FaEnvelope size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm text-center sm:text-left">
                        © {new Date().getFullYear()} Subash. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-sm flex items-center gap-1">
                        Made with <FaHeart className="text-teal-500 text-xs" /> by Subash
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
