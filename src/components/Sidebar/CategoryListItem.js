import React from 'react';
import icons from '../../img/icon'

const CategoryListItem = ({ icon, text, number }) => {
  const componentIcon = icons.filter(image => image.title === icon).pop()
  
  return (
    <tr>
      <td className="px-2 w-1/8">
        <div className="h-4 w-4"><img src={componentIcon.image} alt="."/></div>
      </td>
      <td className="w-5/6 py-1">
        <p>{text}</p>
      </td>
      <td className="text-right py-1 px-2 text-gray-600">
        <p>{number}</p>
      </td>
    </tr>
  );
};

export default CategoryListItem;