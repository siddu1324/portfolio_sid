import React from 'react';
import { motion } from 'framer-motion';

const ProjectsSection: React.FC = () => (
    <motion.div
        className="min-h-screen text-center py-20"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
    >
        <h2 className="text-4xl text-neon">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
            {/* Add project cards here */}
            <div className="project-card p-4 bg-gray-800 rounded-lg shadow-lg">
                <img src="/project-image1.jpg" alt="Project 1" className="w-full h-48 object-cover rounded" />
                <h3 className="text-2xl mt-4">Project 1</h3>
                <div className="flex mt-2 space-x-4">
                    <a href="https://github.com/project1" target="_blank" rel="noopener noreferrer">
                        <img src="/github-logo.png" alt="GitHub" className="w-6 h-6" />
                    </a>
                    <a href="https://devpost.com/software/project1" target="_blank" rel="noopener noreferrer">
                        <img src="/devpost-logo.png" alt="Devpost" className="w-6 h-6" />
                    </a>
                </div>
            </div>
            {/* Add more project cards as needed */}
        </div>
    </motion.div>
);

export default ProjectsSection;
