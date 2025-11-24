"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types";
import { useState } from "react";

interface PortfolioProps {
    projects: Project[];
}

const Portfolio: React.FC<PortfolioProps> = ({ projects }) => {
    const [showAll, setShowAll] = useState(false);
    const INITIAL_DISPLAY_COUNT = 5;

    const displayedProjects = showAll
        ? projects
        : projects.slice(0, INITIAL_DISPLAY_COUNT);

    const hasMore = projects.length > INITIAL_DISPLAY_COUNT;

    return (
        <section
            id="portfolio"
            className="relative py-20 md:py-32 bg-gradient-to-b from-black to-gray-900"
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
                            My Projects
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Explore my work across various domains including web development,
                        AI/ML, and more. Each project showcases my passion for creating
                        impactful solutions.
                    </p>
                </motion.div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedProjects.length > 0 ? (
                        displayedProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20">
                            <p className="text-gray-500 text-lg">
                                Loading projects from GitHub...
                            </p>
                        </div>
                    )}
                </div>


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
                            {showAll ? "Show Less" : `See More (${projects.length - INITIAL_DISPLAY_COUNT} more)`}
                        </motion.button>
                    </motion.div>
                )}


                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://github.com/subash3650"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-3 border-2 border-teal-500 text-teal-400 rounded-full font-semibold hover:bg-teal-500 hover:text-white transition-all duration-300"
                    >
                        View All Projects on GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;
