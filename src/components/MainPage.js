import React from 'react'
import { useTheme } from '../providers/useTheme'

const MainPage = () => {
  const theme = useTheme()
  return (
    <div>
      <button onClick={() => theme.changeMode('light')}>Light mode</button>
      <p className="text-red-500">Hi {theme.mode}</p>
      <button onClick={() => theme.changeMode('dark')}>Dark mode</button>
    </div>
  );
}

export default MainPage;