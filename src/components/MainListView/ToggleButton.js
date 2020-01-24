import React from 'react';
import { useTheme } from '../../providers/useTheme'

const ToggleButton = () => {
  const { changeMode } = useTheme()

  return (
    <label class="switch">
      <input type="checkbox" onChange={() => changeMode()}/>
      <span class="slider round"></span>
    </label>
  );
}
;
export default ToggleButton