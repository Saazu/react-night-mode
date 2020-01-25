import React from 'react';
import { useTheme } from '../../providers/useTheme';
import CategoryListItem from './CategoryListItem';
import NoteListItem from './NoteListItem';
import categories from './categories.json';
import notes from './notes.json';
import lightModeAddIcon from '../../img/add.png';
import darkModeAddIcon from '../../img/add_white.png';
import createDocIconLight from '../../img/create_doc_light.png'
import createDocIconDark from '../../img/create_doc_dark.png'
import searchIconDark from '../../img/search_dark.png'
import searchIconLight from '../../img/search_light.png'


const categoryRows = () => {
  return categories.map(category => {
    return <CategoryListItem key={category.text} {...category}/>
  });
};

const noteListRows = () => {
  return notes.map(note => {
    return <NoteListItem key={note.content} {...note}/>
  });
};

const SideNavBar = () => {
  const { mode } = useTheme()
  return (
    <div className="mx-2">

      <div className="mt-8">
        <div className={"flex rounded my-1 px-2 py-1 " + (mode === 'light' ? 'bg-search-input-background-light' : 'bg-search-input-background-dark')}>
          <img className="h-4 w-4 " src={mode === 'light' ? searchIconLight : searchIconDark} alt="search"/>
          <input 
            className={"w-full h-5 rounded text-xs text-black pl-2 focus:outline-none " + (mode === 'light' ? "bg-search-input-background-light" : "bg-search-input-background-dark")}
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
      <button className="w-full focus:outline-none">
        <span className=" flex mx-2 my-2">
          <div className="w-1/6 mt-1">
            <div className="h-4 w-4">
              <img src={mode === 'light' ? lightModeAddIcon : darkModeAddIcon} alt="New List"/>       
            </div>
          </div>
        
          <div className="text-xs text-left w-4/6">
            <p className="font-hairline mt-1">New List</p>
          </div>

          <div className="w-1/6 mt-1">
            <div className="h-4 w-4 ml-4">
              <img src={mode === 'light' ? createDocIconLight : createDocIconDark} alt="New List"/>
            </div>            
          </div>

        </span>  
      </button>
    </div>
  );
};

export default SideNavBar;