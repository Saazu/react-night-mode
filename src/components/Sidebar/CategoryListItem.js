import React, { useState, useEffect } from 'react';
import calendar from '../../img/calendar.png'

const CategoryListItem = ({ icon, text, number }) => {
  const [ image, setImage ] = useState(null)
  
  const loadImage = () => {
    import(icon).then(image => {
      setImage({
        image
      });
    });
  }


  return (
    <tr>
      <td className="px-2 w-1/8">
        <div className="h-4 w-4"><img src={calendar} alt={""}/></div>
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