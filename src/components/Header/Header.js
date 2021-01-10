import React from 'react';
import './Header.scss';
import datas from '../../datas/datas';


class Header extends React.Component {
    render() {
      return (
      <div class="header-container slidein">
        <h1 class="title">{datas.Identity.name}</h1>
        <div>{datas.Identity.city}</div>
        <div>{datas.Identity.age} ans</div>
      </div>
      
      )
    }
}

export default Header
