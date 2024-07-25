import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen bg-dark flex flex-col">
            <header className="p-5 bg-purple-700 text-white text-3xl font-bold">
                My Portfolio
            </header>
            <main className="flex-grow container mx-auto px-4">
                {children}
            </main>
            <footer className="p-4 bg-black text-white text-center">
                © {new Date().getFullYear()} Siddhartha Reddy Pullannagari. All rights reserved.
            </footer>
        </div>
    );
};

export default Layout;
