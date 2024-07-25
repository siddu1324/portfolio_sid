import React from 'react';
import { motion } from 'framer-motion';

const TechStackSection: React.FC = () => (
    <motion.div
        className="min-h-screen text-center py-20"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
    >
        <h2 className="text-4xl text-neon">Tech Stack</h2>
        <div className="flex justify-center mt-10 space-x-10">
            {/* Add tech stack logos here */}
            <img src="/tech-logo1.png" alt="Tech 1" className="w-16 h-16" />
            <img src="/tech-logo2.png" alt="Tech 2" className="w-16 h-16" />
            <img src="/tech-logo3.png" alt="Tech 3" className="w-16 h-16" />
        </div>
    </motion.div>
);

export default TechStackSection;
