import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import LOGO_WHITE from '../assets/lejhro_logo_white.png';
import LOGO_BLUE from '../assets/lejhro_logo_blue.png';

const Header = ({ toggleMenu }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY >= 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { name: 'Innovations', href: 'https://www.lejhro.com/innovations' },
        { name: 'Business Services', href: 'https://www.lejhro.com/business-services' },
        { name: 'Financial Services', href: 'https://www.lejhro.com/financial-services' },
        { name: 'Bootcamp', href: 'https://www.bootcamp.lejhro.com/', target: '_blank', rel: 'noreferrer' },
    ];

    return (
        <>
            <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white drop-shadow-xl' : 'bg-[#d6932c]'}`}>
                <div className="w-full flex justify-between items-center py-4 px-6">
                    <div className="flex items-center">
                        <a href="https://www.lejhro.com/" aria-label="HomePage">
                            <img
                                src={isScrolled ? LOGO_BLUE : LOGO_WHITE}
                                alt={isScrolled ? "Lejhro Blue Logo" : "Lejhro White Logo"}
                                className="h-8 md:h-[30px]"
                            />
                        </a>
                    </div>
                    {!isScrolled && (
                        <nav className="hidden md:flex space-x-6">
                            {menuItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    target={item.target}
                                    rel={item.rel}
                                    className="text-white hover:text-gray-300 text-sm font-medium"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                    )}
                    <div className="flex items-center space-x-4">
                        {isScrolled && (
                            <a href="https://www.lejhro.com/contact-us" className="text-[#2c7fbf] font-semibold hidden md:flex items-center text-sm">
                                Let's Talk
                                <ArrowRight className="ml-1" size={16} />
                            </a>
                        )}
                        <button
                            className={`
                                w-10 h-10 rounded-full flex flex-col items-center justify-center
                                ${isScrolled ? 'bg-[#3a3632]' : 'bg-white'}
                            `}
                            onClick={toggleMenu}
                            aria-label="Open Menu"
                        >
                            <div className={`h-[2px] w-5 mb-1 ${isScrolled ? 'bg-white' : 'bg-[#3a3632]'}`} />
                            <div className={`h-[2px] w-3 mb-1 ${isScrolled ? 'bg-white' : 'bg-[#3a3632]'}`} />
                            <div className={`h-[2px] w-5 ${isScrolled ? 'bg-white' : 'bg-[#3a3632]'}`} />
                        </button>
                    </div>
                </div>
            </header>
            <div className="bg-[#d6932c] w-full">
                <div className="w-full px-6 py-16">
                    <h1 className="text-white text-5xl font-bold">Blogs</h1>
                </div>
            </div>
        </>
    );
};

export default Header;
