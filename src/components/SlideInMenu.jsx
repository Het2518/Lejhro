import React, { useEffect, useRef } from 'react';
import { X, Twitter, Facebook, Linkedin, Youtube } from 'lucide-react';
import LOGO from '../assets/lejhro_logo_blue.png';

const SlideInMenu = ({ isOpen, toggleMenu }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        toggleMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, toggleMenu]);

  const menuItems = [
    { name: 'Innovations', href: 'https://www.lejhro.com/innovations' },
    { name: 'Business Services', href: 'https://www.lejhro.com/business-services' },
    { name: 'Financial Services', href: 'https://www.lejhro.com/financial-services' },
    { name: 'Bootcamp', href: 'https://www.bootcamp.lejhro.com/', target: '_blank', rel: 'noreferrer' },
    { name: 'About', href: 'https://www.lejhro.com/about' },
    { name: 'Contact Us', href: 'https://www.lejhro.com/contact-us' },
    { name: 'Blogs', href: 'https://www.lejhro.com/blogs' },
  ];

  const socialLinks = [
    { Icon: Twitter, href: 'https://x.com/lejhro', label: 'Twitter' },
    { Icon: Facebook, href: 'https://www.facebook.com/lejhro', label: 'Facebook' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/company/lejhro', label: 'LinkedIn' },
    { Icon: Youtube, href: 'https://www.youtube.com/channel/UCN_okXQlwY7e26UJ8tJtCQQ', label: 'YouTube' },
  ];

  return (
    <div
      ref={menuRef}
      className={`fixed inset-y-0 right-0 w-full max-w-sm bg-white transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50 overflow-y-auto shadow-lg`}
    >
      <div className="flex flex-col h-full p-6">
        <div className="flex justify-between items-center mb-8">
          <img src={LOGO} alt="Lejhro Logo" className="h-8" />
          <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900">
            <X size={24} />
          </button>
        </div>
        <nav className="flex-grow">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="block py-2 text-lg text-gray-800 hover:text-blue-600 transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <div className="flex justify-center space-x-6 mt-8">
          {socialLinks.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideInMenu;