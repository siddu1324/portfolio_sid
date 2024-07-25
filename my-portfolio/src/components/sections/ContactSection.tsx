import React from 'react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => (
    <motion.div
        className="min-h-screen text-center py-20"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
    >
        <h2 className="text-4xl text-neon">Contact</h2>
        <form className="mt-10">
            <div className="flex flex-col items-center space-y-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="p-2 w-64 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="p-2 w-64 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <textarea
                    placeholder="Your Message"
                    className="p-2 w-64 h-32 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                ></textarea>
                <button
                    type="submit"
                    className="p-2 w-64 bg-purple-700 text-white rounded hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
                >
                    Send Message
                </button>
            </div>
        </form>
    </motion.div>
);

export default ContactSection;
