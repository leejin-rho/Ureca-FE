import React, { createContext, useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const sectionRefs = useRef([]);
  const navigate = useNavigate();

  const scrollToSection = (index) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ScrollContext.Provider value={{ sectionRefs, scrollToSection }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
