"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useTheme } from "next-themes";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", to: "hero" },
        { name: "Portfolio", to: "portfolio" },
        { name: "Services", to: "services" },
        { name: "About", to: "about" },
    ];

    if (!mounted) {
        return null;
    }

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-black/80 backdrop-blur-md shadow-lg"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-2xl md:text-3xl font-bold"
                    >
                        <Link
                            to="hero"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent"
                        >
                            Subash
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="text-gray-300 hover:text-teal-400 transition-colors cursor-pointer font-medium"
                                activeClass="text-teal-400"
                                spy={true}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right side - Contact & Theme Toggle */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            offset={-80}
                        >
                            <button className="px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-full font-medium transition-all transform hover:scale-105">
                                Contact
                            </button>
                        </Link>

                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
                        </button>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 text-gray-300"
                            aria-label="Toggle mobile menu"
                        >
                            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-80}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block text-gray-300 hover:text-teal-400 transition-colors cursor-pointer text-lg py-2"
                                    activeClass="text-teal-400"
                                    spy={true}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="about"
                                smooth={true}
                                duration={500}
                                offset={-80}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <button className="w-full px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-full font-medium transition-all">
                                    Contact
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
