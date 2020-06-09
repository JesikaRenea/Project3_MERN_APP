import React from 'react';
import API from "../../utils/API";

const CategoriesTable = props => {

  const deleteCat = id => {
    API.delCatByID(id)
      .then(res => console.log(res))
    // window.location.reload(false)

      .catch(err => console.log(err));
  }

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

                <i
                  onClick={() => deleteCat(props.id)}
                  className="tiny material-icons right"
                  id="lib-btn">X</i>

            </td>
          </tr>
        ))}


      </tbody>
    </table>

  );
};

export default CategoriesTable