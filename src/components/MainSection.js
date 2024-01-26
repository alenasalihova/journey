import React, { useState, useEffect } from 'react';
import { PackageTours, AboutUs, HotTours, Contacts } from './sections';
import'../css/style.css'; 

const MainSection = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    const handleScroll = () => {
        if (document.documentElement.scrollTop > document.documentElement.clientHeight / 3) {
          setShowScrollTop(true);
        } else {
          setShowScrollTop(false);
        }
      };
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <main>
        <PackageTours />
        <AboutUs />
        <HotTours />
        <Contacts />
        {showScrollTop && (
        <a className="scrollToTop" onClick={scrollToTop}>
            <span className="fa fa-chevron-up">&#8593;</span>
        </a>
        )}
    </main>
  );
}

export default MainSection;