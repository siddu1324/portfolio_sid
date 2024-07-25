import { useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import TechStackSection from '../components/sections/TechStackSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import GallerySection from '../components/sections/GallerySection';
import ResumeSection from '../components/sections/ResumeSection';
import ContactSection from '../components/sections/ContactSection';

const Home: React.FC = () => {
    const nameRef = useRef<HTMLDivElement | null>(null);
    const introSectionRef = useRef<HTMLDivElement | null>(null);
    const headerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        let typedText = "Siddhartha Reddy Pullannagari 👋";
        const typingSpeed = 150; // typing speed in ms
        let index = 0;

        const type = () => {
            if (nameRef.current) {
                if (index < typedText.length) {
                    nameRef.current.innerHTML += typedText.charAt(index);
                    index++;
                    setTimeout(type, typingSpeed);
                } else {
                    // Restart typing after a short delay
                    setTimeout(() => {
                        nameRef.current!.innerHTML = "";
                        index = 0;
                        type();
                    }, 1000);
                }
            }
        };

        type();

        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                headerRef.current!.classList.remove('hidden');
            } else {
                headerRef.current!.classList.add('hidden');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleArrowClick = () => {
        if (introSectionRef.current) {
            introSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-screen text-center">
                <div className="relative flex flex-col items-center justify-center w-full">
                    <div ref={nameRef} className="text-6xl font-bold text-neon my-4"></div>
                    <div className="scroll-down-arrow mt-4 cursor-pointer" onClick={handleArrowClick}>
                        <span className="text-2xl">⬇️</span>
                    </div>
                </div>
            </div>
            <div ref={headerRef} className="hidden p-5 bg-purple-700 text-white text-3xl font-bold fixed w-full top-0 z-50" id="header">
                My Portfolio
            </div>
            <motion.div
                ref={introSectionRef}
                className="flex flex-col items-center justify-center min-h-screen text-center mt-20"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
            >
                <div className="profile-image-container">
                    <img src="/profile.jpg" alt="Siddu" className="profile-image object-cover" />
                </div>
                <motion.p
                    className="text-lg text-gray-400 mt-4"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
                >
                    Here you can introduce yourself briefly. Highlight what you do and what makes you unique. Keep it short and engaging.
                </motion.p>
                <div className="flex mt-4 space-x-4">
                    <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
                        <img src="/linkedin-logo.png" alt="LinkedIn" className="w-8 h-8" />
                    </a>
                    <a href="https://github.com/siddu1324" target="_blank" rel="noopener noreferrer">
                        <img src="/github-logo.jpg" alt="GitHub" className="w-8 h-8" />
                    </a>
                </div>
            </motion.div>
            <TechStackSection />
            <ProjectsSection />
            <GallerySection />
            <ResumeSection />
            <ContactSection />
        </Layout>
    );
};

export default Home;
