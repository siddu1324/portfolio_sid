// src/pages/index.tsx
import { useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import Typed from 'typed.js';

const Home: React.FC = () => {
    const el = useRef<HTMLSpanElement | null>(null);
    const typed = useRef<any>(null);

    useEffect(() => {
        const options = {
            strings: ['Siddhartha Reddy Pullannagari👋'],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
        };

        typed.current = new Typed(el.current!, options);

        return () => {
            typed.current.destroy();
        };
    }, []);

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-screen text-center">
                <div className="w-48 h-48 mb-4 overflow-hidden rounded-full shadow-lg">
                <img src="/profile.jpg" alt="Siddu" className="object-cover w-full h-full"/>
                </div>
                <h1 className="text-4xl font-bold text-neon">
                    <span ref={el}></span>
                </h1>
                <p className="mt-4 text-lg text-gray-400">
                    Here you can introduce yourself briefly. Highlight what you do and what makes you unique. Keep it short and engaging.
                </p>
            </div>
        </Layout>
    );
};

export default Home;
