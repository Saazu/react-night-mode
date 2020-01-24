import React from 'react';
import { useTheme } from '../../providers/useTheme';
import CategoryListItem from './CategoryListItem';
import NoteListItem from './NoteListItem';
import categories from './categories.json';
import notes from './notes.json';
import lightModeAddIcon from '../../img/add.png';
import darkModeAddIcon from '../../img/add_white.png';

const categoryRows = () => {
  return categories.map(category => {
    return <CategoryListItem {...category}/>
  });
};

const noteListRows = () => {
  return notes.map(note => {
    return <NoteListItem {...note}/>
  });
};

const SideNavBar = () => {
  const { mode } = useTheme()
  return (
    <div className="mx-2">

      <div className="mt-8">
        <div>
          <input 
            className={"w-full h-5 rounded pl-8 text-sm  " + (mode === 'light' ? "bg-search-input-background-light" : "bg-search-input-background-dark")}
            placeholder="Search"
          />
        </div>  
      </div>

      <table className="table-fixed align-middle mt-2">
        <tbody className="text-xs">
          {categoryRows()}
        </tbody>
      </table>

      <hr className="mx-2 border-search-input-background-light my-2"></hr>

      <table className="table-fixed align-middle mt-2">
        <tbody className="text-xs">
          {noteListRows()}
        </tbody>
      </table>
      <div className="w-full my-2 mx-2 flex">
        <div className="h4 w-4 mx-2">
          <button>
            {<img src={mode === 'light' ? lightModeAddIcon : darkModeAddIcon} alt="New List"/>}
          </button>
        </div>
        <div className="mx-2 text-sm w-4/6">
          <button><p>New List</p></button>
        </div>
        <div className="w-1/6 h4 w-4">
          <button>
            {<img src={mode === 'light' ? lightModeAddIcon : darkModeAddIcon} alt="New List"/>}
          </button>
        </div>
      </div>
    </div>
    
    
  );
};

export default SideNavBar;