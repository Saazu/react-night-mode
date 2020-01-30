import React, { useState } from 'react';
import listCircle from '../../img/list_circle.png';
import { useTheme } from '../../providers/useTheme';
import listStar from '../../img/list_star.png'
import goldStar from '../../img/gold_star.png'
import trash from '../../img/trash.png'

const ListItem = ({ id, content, deleteListItem, editListItem }) => {
  const { mode } = useTheme();

  const [ starred, setStarred ] = useState("starred");
  const [inEditMode, setInEditMode ] = useState(false);

  const handleEnterKey = event => {
    if(event.keyCode === 13 || event.charCode === 13) {
      setInEditMode(false);
      editListItem(id, event.target.value)
    }
  };

  const handleEditMode = () => {
    setInEditMode(!inEditMode);
  };

  const handleStarListItem = () => {
    if (starred === 'starred') {
      setStarred('unstarred')
    } else {
      setStarred('starred')
    }
  };

  const handleContentEdit = event => {
    event.preventDefault()

  }

  console.log(`Content: ${content}`)
  return (
    <li className="list-none">
      <div className={"flex rounded px-2 py-2 " + (mode === 'light' ? "bg-white " : "bg-list-item-background-dark text-white")}>
        <div className="w-11/12 flex">
          <div className="h-4 w-4 ml-2 mr-4 pt-1">
            <img src={listCircle} alt="list circle"></img>
          </div>
          <div className="text-sm font-thin" onClick={handleEditMode}>
            {
              inEditMode 
              ? 
              <input className="text-black" type="text" autoFocus defaultValue={content} onChange={handleContentEdit} onKeyPress={handleEnterKey}/> 
              :
              <p className="sm:truncate">{content}</p>
            }
          </div>
        </div>
        <div className="w-2/12 mt-1 mx-2 flex justify-end">
        <div className="h-6 w-6 pr-1">
            <button className="focus:outline-none" onClick={() => deleteListItem(id)}><img src={trash} alt="delete list item"/></button>
          </div>
          <div className="h-4 w-4">
            <button className="focus:outline-none" onClick={handleStarListItem}><img src={starred === 'starred' ? listStar : goldStar} alt="star list item"/></button>
          </div>
        </div>
      </div>
      <hr className={"mx-1 " + (mode === "light" ? "border-list-view-background-color-light" : "border-list-view-background-color-dark")}></hr>
    </li>
  );
}

export default ListItem;