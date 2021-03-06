import React, { useState } from 'react';
import { ReactSortable } from "react-sortablejs";
import { useTheme } from '../../providers/useTheme';
import spanner from '../../img/spanner.png';
import ListItem from './ListItem';
import ToggleButton from './ToggleButton'
import list from './list.json';
import deleteIconLight from '../../img/delete.png';
import deleteIconDark from '../../img/delete_dark.svg';
import addUserLight from '../../img/add-user-light.png';
import addUserDark from '../../img/add-user-dark.png';
import ellipsisLight from '../../img/ellipsis-light.png';
import ellipsisDark from '../../img/ellipsis-dark.png';
import addListLight from '../../img/add_white.png';
import addTaskDark from '../../img/add_task_dark.png';

const MainListView = () => {
  const { mode } = useTheme();
  const [ newListInput, setNewListInput ] = useState(''); // state when a new list is being created
  const [ listItems, setListItems ] = useState(list);

  //this function adds a new list item
  const addListItem = event => {
    if (event.keyCode === 13 || event.charCode === 13) {
      const content = newListInput;
      const newListItem = {
        id: listItems.length + 1,
        content
      };
      setListItems(listItems.concat(newListItem));
      setNewListInput('');
    }
  };

  //this function is passed to child components
  //and deletes selected list item
  const deleteListItem = (id) => {
    const newList = listItems.filter(item => item.id !== id);
    setListItems(newList);
  };

  //this function is passed to list item components
  //and save an editted list item to the list of notes
  const editListItem = (id, newContent) => {
    const newListItem = {
      id: listItems.length + 1,
      content: newContent
    };
    setListItems(listItems.map(item => item.id !== id ? item : newListItem));
  }

  //function returns a component whose li children are clickable and draggable
  const listRows = () => {
    return <ReactSortable list={listItems} setList={setListItems}>
      {listItems.map(listItem => 
        <ListItem
          deleteListItem={deleteListItem}
          newListInput={newListInput}
          editListItem={editListItem}
          key={listItem.id} 
          {...listItem}
        />
      )}
    </ReactSortable>
  };

  return (
    <div className="mx-2 my-4 flex flex-col h-full">
      <div className="flex justify-between">
        <div className="flex">
          <div className="h-8 w-8 mt-1">
            <img className="" src={spanner} alt="spanner"/>
          </div>
          <div>
            <h1 className={"font-bold text-3xl " + 
              (mode === 'light' ? 
                'text-white' : 
                'text-list-view-background-color-light')}>
              Skill
            </h1>
          </div>
        </div>
        
        <div className="flex mt-4">
          <div className={"mx-1 px-4 pt-1 rounded sm:visible " + 
            (mode === 'light' ? 
              'bg-select-options-background-light' : 
              "bg-list-item-background-dark")}
            >
            <button>{<img className="h-3 w-3" 
                      src={mode === 'light' ? addUserLight : addUserDark} 
                      alt="add user"/>}
            </button>
          </div>
          <div className={"mx-1 px-4 pt-1 rounded " + 
                          (mode === 'light' ? 'bg-select-options-background-light' : "bg-list-item-background-dark")}>
            <button>{<img className="h-3 w-3" src={mode === 'light' ? ellipsisLight : ellipsisDark} alt="more optionz"/>}</button>
          </div>
          <div className="ml-1">
            <ToggleButton />
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="">
          <select className={(mode === 'light' ? 
                              "text-white text-sm bg-select-options-background-light " : 
                              "text-list-view-background-color-light bg-list-item-background-dark")}
          >
            <option className="my-1 bg-select-options-background-light">Sorted by Importance</option>
          </select>
        </div>

        <div className={"mx-1 px-1 rounded " + 
                        (mode === 'light' ? 
                            "bg-select-options-background-light rounded" : 
                            "bg-list-item-background-dark")}
        >
          <button>{<img className="h2 w-3 " 
                    src={mode === 'light' ? deleteIconLight : deleteIconDark} 
                    alt="delete"/>}</button
          >
        </div>
      </div>

      <div className="mt-1 flex-grow">
        {listRows()}
      </div>
      
      <div className="mb-6">
        <div className={"flex rounded my-1 px-2 py-1 " + 
                        (mode === 'light' ? 
                          'bg-select-options-background-light' : 
                          "bg-list-item-background-dark")}
        >
          <img className="h-4 w-4 mt-2 " src={mode === 'light' ? addListLight : addTaskDark} alt="search"/>
          <input
            value={newListInput}
            onChange={event => setNewListInput(event.target.value)}
            onKeyPress={addListItem}
            className={"w-full h-8 rounded text-sm pl-2 focus:outline-none " + 
                        (mode === 'light' ? "bg-select-options-background-light placeholder-white text-white" : 
                                  // eslint-disable-next-line no-multi-str
                          "bg-list-item-background-dark placeholder-select-options-background-light \
                          text-select-options-background-light")}
            placeholder="Add Task"
          />
        </div>
      </div>
    </div>
    
  );
};

export default MainListView;