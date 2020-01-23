import React from 'react';
import { ThemeProvider } from './providers/useTheme'
import MainPage from './components/MainPage'
import './css/tailwind.css'

const App = () => {
  return (
    <ThemeProvider>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;