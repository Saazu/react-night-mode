import React from 'react';
import listCircle from '../../img/list_circle.png';
import { useTheme } from '../../providers/useTheme';

const ListItem = ({ content }) => {
  const { mode } = useTheme();

  return (
    <div className={"flex rounded mt-1 align-middle px-2 py-2 " + (mode === 'light' ? "bg-white " : "bg-list-item-background-dark text-white")}>
      <div className="h-4 w-4 ml-2 mr-4 pt-1">
        <img src={listCircle} alt="list circle"></img>
      </div>
      <div className="text-sm font-thin">
        <p>{content}</p>
      </div>
    </div>
  );
}

export default ListItem;