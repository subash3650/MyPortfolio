"use client";

import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Image from "next/image";

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >

            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-crowd.png"
                    alt="Developer Background"
                    fill
                    className="object-cover opacity-40"
                    priority
                    quality={90}
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
            </div>


            <div className="absolute inset-0 z-10 opacity-20">
                <Image
                    src="/images/geometric-pattern.svg"
                    alt=""
                    fill
                    className="object-cover animate-parallax"
                />
            </div>


            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-8"
                >

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                    >
                        <span className="block bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 bg-clip-text text-transparent">
                            Born to stand out not to fit in
                        </span>
                    </motion.h1>


                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed"
                    >
                        I'm Subash — a full-stack engineer and aspiring founder building AI-driven
                        web products that solve real-world problems.
                    </motion.p>


                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4"
                    >
                        <Link to="portfolio" smooth={true} duration={800} offset={-80}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-teal-500/50 transition-all duration-300"
                            >
                                Checkout My Work
                            </motion.button>
                        </Link>

                        <Link to="about" smooth={true} duration={800} offset={-80}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 border-2 border-teal-500 text-teal-400 rounded-full font-semibold text-lg hover:bg-teal-500 hover:text-white transition-all duration-300"
                            >
                                Learn More
                            </motion.button>
                        </Link>

                        <motion.a
                            href="https://drive.google.com/uc?export=download&id=1JF5T1IrJsTr9KAfxPIkDRFyr0VtophGY"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 border-2 border-teal-500 text-teal-400 rounded-full font-semibold text-lg hover:bg-teal-500 hover:text-white transition-all duration-300"
                        >
                            Get My Resume
                        </motion.a>
                    </motion.div>
                </motion.div>


            </div>
        </section>
    );
};

export default Hero;
