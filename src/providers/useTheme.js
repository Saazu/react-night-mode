import React, { useState, createContext, useContext } from 'react'

const themeContext = createContext();

// Hook for child components to get the theme object ...
// ... and re-render when it changes.
function useTheme () {
  const context = useContext(themeContext)
  if (!context) {
    throw new Error(`useTheme must be used within a ThemeProvider`);
  }
  return context;
}

// Provider hook that creates theme object and handles state
function useProvideTheme() {
  const [ mode, setMode ] = useState('light');

  //method on theme object that allows changing of them 
  const changeMode = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  return {
    mode,
    changeMode
  };
}

// Provider component that wraps your app and makes theme object ...
// ... available to any child component that calls useTheme().
function ThemeProvider({ children }) {
  const theme = useProvideTheme();
  return <themeContext.Provider value={theme}>{children}</themeContext.Provider>;
}

export { ThemeProvider, useTheme }