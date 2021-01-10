import React from 'react';
import data from '../../datas/datas';


class Presentation extends React.Component {
    render() {
      return (
          <div>
            <h1>Nom : {data.Identity.name}</h1>
            <p>{data.Identity.city}</p>
            <p>{data.Identity.age}</p>
          </div>
      )
    }
}

export default Presentation