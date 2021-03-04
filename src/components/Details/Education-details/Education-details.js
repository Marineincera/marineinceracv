import React from 'react';
import './Education-details.css'


class EducationDetails extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      descriptionVisibility : false,
      menuVisibility : false

    }
    this.buttonText = "+"
  }

  

  showDescription = () => {
    this.setState(state => ({ menuVisibility: !state.menuVisibility}))
    this.setState(state => ({ descriptionVisibility: !state.descriptionVisibility}))
    if (this.buttonText === "+"){
      this.buttonText = "-"
    } else {
      this.buttonText = "+"
    }
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
          <div key={this.props.item.id} class="education-case" onClick={this.showDescription} >
            {/* {this.state.menuVisibility? null :  */}
            <div>
              {this.state.descriptionVisibility? null :<p className="education-text">{this.props.item.date}</p> }  
              <h1>{this.props.item.title}</h1>
              {this.state.descriptionVisibility? null : <h2 className="education-title-second">{this.props.item.level}</h2>}
              {this.state.descriptionVisibility? null : <p className="education-text">{this.props.item.school}</p>}
              {this.state.descriptionVisibility? <p className="education-text">{this.props.item.description}</p> : null }
              <button className="education-details-button">{this.buttonText} </button> 
              </div> 

              {/* } */}
              {/* {this.state.menuVisibility? <p className="education-text">voir details </p> : null} */}
          </div>
      
      )
    }
}

export default EducationDetails