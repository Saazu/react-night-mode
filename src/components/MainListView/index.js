import React from 'react';
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

const listRows = () => {
  return list.map(listItem => {
    return <ListItem key={listItem.content} {...listItem}/>
  });
};

const MainListView = () => {
  const { mode } = useTheme()
  return (
    <div className="mx-2 my-4 flex flex-col min-h-screen">
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
                      alt="add user"/>}</button>
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
                          "bg-list-item-background-dark")}>
          <img className="h-4 w-4 mt-2 " src={mode === 'light' ? addListLight : addTaskDark} alt="search"/>
          <input 
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
}

export default MainListView;