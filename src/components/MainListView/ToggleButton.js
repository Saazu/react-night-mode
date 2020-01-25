import React from 'react';
import { useTheme } from '../../providers/useTheme'

const ToggleButton = () => {
  const { changeMode } = useTheme()

  return (
    <label className="switch">
      <input type="checkbox" onChange={() => changeMode()}/>
      <span className="slider round"></span>
    </label>
  );
}
;
export default ToggleButton