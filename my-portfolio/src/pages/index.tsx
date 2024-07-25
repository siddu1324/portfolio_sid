import { useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
    const nameRef = useRef<HTMLDivElement | null>(null);
    const introSectionRef = useRef<HTMLDivElement | null>(null);

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
                    <div ref={nameRef} className="text-6xl font-bold text-neon my-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}></div>
                    <div className="scroll-down-arrow mt-4 cursor-pointer" onClick={handleArrowClick}>
                        <span className="text-2xl">⬇️</span>
                    </div>
                </div>
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
                    className="text-lg text-gray-400 mt-20"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
                >
                    Here you can introduce yourself briefly. Highlight what you do and what makes you unique. Keep it short and engaging.
                </motion.p>
            </motion.div>
        </Layout>
    );
};

export default Home;
