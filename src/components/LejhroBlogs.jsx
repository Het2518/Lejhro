import React, { useState } from 'react';
import Header from './Header';
import SlideInMenu from './SlideInMenu';
import BlogContent from './BlogContent';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const LejhroBlogUI = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className="bg-white">
            <Header toggleMenu={toggleMenu} />
            <SlideInMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <main className="container mx-auto px-4">
                <BlogContent />
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default LejhroBlogUI;