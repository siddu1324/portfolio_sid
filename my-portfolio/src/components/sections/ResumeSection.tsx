import React from 'react';
import { motion } from 'framer-motion';

const ResumeSection: React.FC = () => (
    <motion.div
        className="min-h-screen text-center py-20"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
    >
        <h2 className="text-4xl text-neon">Resume</h2>
        <div className="mt-10">
            <iframe
                src="https://drive.google.com/file/d/YOUR_RESUME_ID/preview"
                width="640"
                height="480"
                allow="autoplay"
                className="mx-auto"
            ></iframe>
        </div>
    </motion.div>
);

export default ResumeSection;
