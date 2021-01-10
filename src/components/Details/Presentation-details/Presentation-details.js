import React from 'react';
import './Presentation-details.scss';
import { FaFutbol, FaBookOpen, FaDice, FaPencilAlt } from "react-icons/fa";


class PresentationDetails extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
      return (
      <div className="presentation-details">
        <div className="presentation-section">
          <div className="identity-and-picture">
            <img className="profile-picture" src="https://marineincerapro.github.io/pictures/incera-marine-photo.jpg"/>
            <div className="identity-case">
              <h2 className="identity-title">Contact</h2>
              <p>{this.props.identity.mail}</p>
              <p>{this.props.identity.phone}</p>
          </div>           
        </div>
        </div>
        <div className="presentation-section">
          <div className="identity">
                <h1 className="identity-title">{this.props.identity.name}</h1>
                <h2 className="identity-title">{this.props.identity.age} ans</h2>
          </div>
          <div className="fondamentals-skills">
          {/* <h1 className="identity-title">Compétences</h1> */}
          {this.props.identity.fondamentalsSkills.map((skill) => (
            <h2 className="identity-title fskill">{skill}</h2>
              ))}
          </div>
          <div className="location ">
                <p>{this.props.identity.city}</p>
                <p>{this.props.identity.country}</p>
            </div>
        </div>
        <div className="presentation-section bottom"> 
        <div className="hobbies identity-case">
              <h2 className="identity-title">Hobbies</h2>
              <div className="hobbies">
                <div className="hobbies-list-icons">
                <FaFutbol className="hobby"/>
                <FaBookOpen className="hobby"/>
                <FaDice className="hobby" />
                <FaPencilAlt className="hobby"/>
                </div>
              </div>
          </div>
          <div className="personnal-skills identity-case">
            <h2 className="identity-title">Personnal Skills</h2>
            {this.props.identity.personnalSkills.map((skill) => (
            <p>{skill}</p>
              ))}
          </div>
        </div>
      </div>
      )
    }
}

export default PresentationDetails