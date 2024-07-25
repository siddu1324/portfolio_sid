import React from 'react';
import { motion } from 'framer-motion';

const GallerySection: React.FC = () => (
    <motion.div
        className="min-h-screen text-center py-20"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
    >
        <h2 className="text-4xl text-neon">Gallery of Memories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
            {/* Add gallery images here */}
            <div className="relative group">
                <img src="/memory-image1.jpg" alt="Memory 1" className="w-full h-48 object-cover rounded" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white">Memory 1</span>
                </div>
            </div>
            {/* Add more gallery images as needed */}
        </div>
    </motion.div>
);

export default GallerySection;
