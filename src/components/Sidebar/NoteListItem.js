import React from 'react';

const NoteListItem = ({ icon, content }) => {
  return (
    <tr>
      <td className="px-2 w-1/8 py-1">
        <img src={icon} alt={``}/>
      </td>
      <td className="w-7/8 py-1">
        <p>{content}</p>
      </td>
    </tr>
  );
}

export default NoteListItem;