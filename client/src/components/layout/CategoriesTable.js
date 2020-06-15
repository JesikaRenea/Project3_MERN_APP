import React from 'react';
// import API from "../../utils/API";

const CategoriesTable = props => {

  return (
    <table>
      <thead>
        <tr>
          <th>Categories</th>
        </tr>
      </thead>

      <tbody>
        {props.categories.map(category => (
          <tr key={category.id}>
            <td>
              {category.catName}

            </td>
          </tr>
        ))}


      </tbody>
    </table>

  );
};

export default CategoriesTable