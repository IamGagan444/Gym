import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } 
      // Hide navbar when scrolling down
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navbarVariants = {
    hidden: { 
      opacity: 0, 
      y: -100,
      transition: {
        duration: 0.3
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const navLinks = [
    { label: "Home", onClick: () => setActiveLink('Home') },
    { label: "About", onClick: () => setActiveLink('About') },
    { label: "Contact", onClick: () => setActiveLink('Contact') },
    { label: "Login", onClick: () => setActiveLink('Login') }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav 
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={navbarVariants}
          className="fixed top-0 inset-x-0 z-50 flex justify-center items-start pt-4"
        >
          <div className="w-[70%] max-w-6xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-700 shadow-lg rounded-full px-6 py-3 flex justify-between items-center">
            <div 
              className="text-2xl font-bold text-white hover:text-blue-600 transition-colors cursor-pointer"
              onClick={() => setActiveLink('Home')}
            >
              Logo
            </div>
            
            <div className="flex space-x-6 items-center">
              {navLinks.map((link) => (
                <div 
                  key={link.label}
                  className={`
                    text-white hover:text-blue-600 transition-colors cursor-pointer
                    ${activeLink === link.label ? 'font-bold ' : ''}
                  `}
                  onClick={link.onClick}
                >
                  {link.label}
                </div>
              ))}
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;