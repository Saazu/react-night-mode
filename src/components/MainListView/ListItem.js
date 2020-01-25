import React, { useState } from 'react';
import listCircle from '../../img/list_circle.png';
import { useTheme } from '../../providers/useTheme';
import listStar from '../../img/list_star.png'
import goldStar from '../../img/gold_star.png'

const ListItem = ({ content }) => {
  const { mode } = useTheme();

  const [ starred, setStarred ] = useState("starred")

  const handleStarListItem = () => {
    if (starred === 'starred') {
      setStarred('unstarred')
    } else {
      setStarred('starred')
    }
  }
  return (
    <div>
      <div className={"flex rounded px-2 py-2 " + (mode === 'light' ? "bg-white " : "bg-list-item-background-dark text-white")}>
        <div className="w-11/12 flex">
          <div className="h-4 w-4 ml-2 mr-4 pt-1">
            <img src={listCircle} alt="list circle"></img>
          </div>
          <div className="text-sm font-thin">
            <p>{content}</p>
          </div>
        </div>
        <div className="w-1/12 mt-1 mx-2 flex justify-end">
          <div className="h-4 w-4">
            <button className="focus:outline-none" onClick={handleStarListItem}><img src={starred === 'starred' ? listStar : goldStar} alt="star list"/></button>
          </div>
        </div>
      </div>
      <hr className={"mx-1 " + (mode === "light" ? "border-list-view-background-color-light" : "border-list-view-background-color-dark")}></hr>
    </div>
    
  );
}

export default ListItem;