import React from 'react';
import { useTheme } from '../../providers/useTheme';
import spanner from '../../img/spanner.png';
import ListItem from './ListItem';
import ToggleButton from './ToggleButton'
import list from './list.json';
import deleteIconLight from '../../img/delete.png';
import deleteIconDark from '../../img/delete_dark.svg';
import addUserLight from '../../img/add-user-light.png'
import addUserDark from '../../img/add-user-dark.png'
import ellipsisLight from '../../img/ellipsis-light.png'
import ellipsisDark from '../../img/ellipsis-dark.png'


const listRows = () => {
  return list.map(listItem => {
    return <ListItem key={listItem.content} {...listItem}/>
  });
};

const MainListView = () => {
  const { mode } = useTheme()
  return (
    <div className="mx-2 my-4">
      <div className="flex justify-between">

        <div className="flex">
          <div className="h-8 w-8 mt-1">
            <img className="" src={spanner} alt="spanner"/>
          </div>
          <div>
            <h1 className={"font-bold text-3xl " + (mode === 'light' ? 'text-white' : 'text-list-view-background-color-light')}>
              Skill
            </h1>
          </div>
        </div>
        <div className="text-right mt-4">
          <button>{<img className="h-3 w-3" src={mode === 'light' ? addUserLight : addUserDark} alt="add user"/>}</button>
        </div>
        <div className="text-right mt-4">
          <button>{<img className="h-3 w-3" src={mode === 'light' ? ellipsisLight : ellipsisDark} alt="more optionz"/>}</button>
        </div>
        <div className="text-right mt-4">
          <ToggleButton />
        </div>
      </div>
      <div className="flex">

        <div className="">
          <select className={"" + (mode === 'light' ? "text-black text-sm bg-select-options-background-light " : "text-list-view-background-color-light bg-list-item-background-dark")}>
            <option className="my-1 bg-select-options-background-light">Sorted by Importance</option>
          </select>
        </div>

        <div className={"mx-1 px-1 rounded " + (mode === 'light' ? "bg-select-options-background-light rounded" : "bg-list-item-background-dark")}>
          <button>{<img className="h2 w-3" src={mode === 'light' ? deleteIconLight : deleteIconDark} alt="delete"/>}</button>
        </div>
      </div>
      
      <div>
        {listRows()}
      </div>
    </div>
    
  );
}

export default MainListView;