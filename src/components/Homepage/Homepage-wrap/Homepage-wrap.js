import React from 'react';
import './Homepage-wrap.scss';
import DetailsPage from '../../Details/Details-page'

class HomepageWrap extends React.Component {
constructor(props){
  super(props);
  this.state = {
    detailsSectionOpened : false,
    className: "cont_desc"
  }
}

openSection = () => { 
  this.setState(state => ({ detailsSectionOpened: !state.detailsSectionOpened}))
  this.setState(state => ({ className: "full"}))

}




render() {
    return(
    <span class="section">
      <div class="cont_title">
        <h1>{this.props.title}</h1>
      </div>
      <div class={this.state.className}>
        <p>{this.props.description}</p>
      </div>
    </span>
  )

    } 
    

}



export default HomepageWrap