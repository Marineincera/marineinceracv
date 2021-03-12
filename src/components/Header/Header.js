import React from 'react';
import './Header.scss';
import datas from '../../datas/datas';
import Typical from 'react-typical';

import { ImSun } from 'react-icons/im';


class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mouseDown : false
    }
  }


  mouseDownChangeHeaderDisplay = () => {
    this.setState(state => ({ mouseDown: true}));
    var element = document.getElementById("header-wrapper");
    element.classList.remove("header-container-coming");
    element.classList.add("header-container");

  }

    render() {
      return (
      <div id="header-wrapper" class="header-container-coming" onMouseDown={this.mouseDownChangeHeaderDisplay}>
        <div className="fname">
        <Typical
            steps={[datas.Identity.name, 2000]}
            loop={1}
            wrapper="b"
            
        />
        </div>
        <Typical
            steps={[, "Développeuse web junior", 3000, datas.Identity.city, 3000, datas.Identity.age + " ans", 1000, , "Développeuse web junior", 1000 ]}
            loop={3}
            wrapper="b"
            
        />

        {/* <h1 class="title">{datas.Identity.name}</h1> */}
        <ImSun/>
        {!this.state.mouseDown? <div className="opening-text welcome">Bienvenue</div> : null }
        {!this.state.mouseDown? <div className="opening-text arrow" >&#8675;</div> : null }
      
      </div>
      
      )
    }
}

export default Header
