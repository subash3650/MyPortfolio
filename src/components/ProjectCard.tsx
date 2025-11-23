"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Project } from "@/types";
import Image from "next/image";

interface ProjectCardProps {
    project: Project;
    index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-teal-500/50 transition-all duration-300"
        >
            {/* Project Image */}
            <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-800">
                <Image
                    src={project.imageUrl}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
            </div>

            {/* Project Content */}
            <div className="p-6 space-y-4">
                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
                    {project.name.replace(/-/g, " ").replace(/_/g, " ")}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm line-clamp-2">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 5).map((tech, idx) => (
                        <span
                            key={idx}
                            className="px-3 py-1 text-xs font-medium bg-teal-500/10 text-teal-400 rounded-full border border-teal-500/20"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-2">
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors"
                    >
                        <FiGithub size={20} />
                        <span className="text-sm font-medium">Code</span>
                    </a>

                    {project.demoUrl && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors"
                        >
                            <FiExternalLink size={20} />
                            <span className="text-sm font-medium">Demo</span>
                        </a>
                    )}
                </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-teal-500/5 to-transparent" />
            </div>
        </motion.div>
    );
};

export default ProjectCard;
