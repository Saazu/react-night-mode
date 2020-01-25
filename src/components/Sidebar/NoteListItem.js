import React from 'react';
import list from '../../img/list.png'

const NoteListItem = ({ content }) => {
  //const images = require.context('../../img', true);
  //let imgPath = images(`./${icon}`);
  
  return (
    <tr>
      <td className="px-2 w-1/8 py-1">
        <div className="h-4 w-4"><img src={list} alt={''}/></div>
      </td>
      <td className="w-7/8 py-1">
        <p>{content}</p>
      </td>
    </tr>
  );
}

export default NoteListItem;