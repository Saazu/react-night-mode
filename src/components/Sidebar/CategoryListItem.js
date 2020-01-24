import React from 'react';

const CategoryListItem = ({ icon, text, number }) => {
  return (
    <tr>
      <td className="px-2 w-1/8">
        <img src={icon} alt={``}/>
      </td>
      <td className="w-5/6 py-1">
        <p>{text}</p>
      </td>
      <td className="text-right py-1 px-2 text-gray-600">
        <p>{number}</p>
      </td>
    </tr>
  );
}

export default CategoryListItem;