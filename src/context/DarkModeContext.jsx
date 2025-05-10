import React, { createContext, useState, useContext, useEffect } from 'react';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  // Get initial dark mode preference from localStorage or system preference
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return savedMode === 'true';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Update the class on the html element whenever darkMode changes
  useEffect(() => {
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    
    if (darkMode) {
      htmlElement.classList.add('dark');
      bodyElement.classList.add('dark-mode');
      
      // Add dark mode classes to specific components that need it
      document.querySelectorAll('.header, .dashboard-container, .footer, .newsletter, .social-link, .stages-page, .scholarship-page, .events-page, .highlights-page, .auth-container, .signup-page, .stage-details-page, .landing-page').forEach(el => {
        if (el) el.classList.add('dark-mode');
      });
      
    } else {
      htmlElement.classList.remove('dark');
      bodyElement.classList.remove('dark-mode');
      
      // Remove dark mode classes from specific components
      document.querySelectorAll('.header, .dashboard-container, .footer, .newsletter, .social-link, .stages-page, .scholarship-page, .events-page, .highlights-page, .auth-container, .signup-page, .stage-details-page, .landing-page').forEach(el => {
        if (el) el.classList.remove('dark-mode');
      });
    }
    
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom hook to use dark mode
export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};