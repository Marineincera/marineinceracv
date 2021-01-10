import React from 'react';
import './Education-details.css'


class EducationDetails extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      descriptionVisibility : false,
      menuVisibility : false

    }
  }

  

  showDescription = () => {
    this.setState(state => ({ menuVisibility: !state.menuVisibility}))
    this.setState(state => ({ descriptionVisibility: !state.descriptionVisibility}))
  }

  showMenu = () => {
    this.setState(state => ({ menuVisibility: !state.menuVisibility}))

  }

  showDetails = () => {
    this.setState(state => ({ menuVisibility: false}))
    this.setState(state => ({ descriptionVisibility: false}))
  }


    render() {
      return (
          <div key={this.props.item.id} class="education-case" onClick={this.showDescription} onMouseEnter={this.showMenu} onMouseLeave={this.showDetails}>
            {this.state.menuVisibility? null : 
            <div>
              {this.state.descriptionVisibility? null :<p>{this.props.item.date}</p> }  
              <h1>{this.props.item.title}</h1>
              {this.state.descriptionVisibility? null : <h2>{this.props.item.level}</h2>}
              {this.state.descriptionVisibility? null : <p >{this.props.item.school}</p>}
              {this.state.descriptionVisibility? <p>{this.props.item.description}</p> : null }
              </div>
              }
              {this.state.menuVisibility? <p>voir details </p> : null}
          </div>
      
      )
    }
}

export default EducationDetails