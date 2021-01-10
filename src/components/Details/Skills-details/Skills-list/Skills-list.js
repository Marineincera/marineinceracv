import React from 'react';
import './Skills-list.css';
import {FaCircle, FaRegCircle } from "react-icons/fa";


class SkillsList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          
        }
        this.level1 = <div>  <FaCircle/> <FaRegCircle/> <FaRegCircle/></div>
        this.level2 = <div>  <FaCircle/> <FaCircle/> <FaRegCircle/> <FaRegCircle/></div>
        this.level3 = <div>  <FaCircle/> <FaCircle/> <FaCircle/> <FaRegCircle/></div>
        this.level4 = <div>  <FaCircle/> <FaCircle/> <FaCircle/> <FaCircle/></div>
    }
    

  
 

determineLevel(level){
  switch(level){
    case "1":
      return this.level1
    case "2":
      return  this.level2
      case "3":
        return this.level3
      default: 
      return ""
  }
  
}


    render() {
      return (
      <div class="skills-list-container">
          <div class="skill-title-container">
            <h1 class="skill-title">{this.props.title}</h1>
          </div>
          {this.props.title !== "Outils numériques" ?
            <div  class="skills-list">
              {this.props.datas.map((skill, i) => (
                  <p key={i}>{skill}</p>
                  ))}
            </div>
          : 
        <div class="tools-container">

          <div  class="tools-skills-list">
           <h1 class="tool-title">Web & Numérique</h1>
            {this.props.toolsArray[0].map((skill, i) => (
              <div key={i} class="tool-skill">
                <p>{skill.name} </p>
                <p> {this.determineLevel(skill.level)}</p>
              </div>
            ))}
          </div>
          <div  class="tools-skills-list">
            <div  class="tools-skills-list">
              <h1 class="tool-title">Outils de Marketing & de Communication</h1>
              <p>{this.props.toolsArray[1].title}</p>
              {this.props.toolsArray[1].map((skill, i) => (
                <div key={i} class="tool-skill">
                  <p>{skill.name} </p>
                  <p> {this.determineLevel(skill.level)}</p>
                </div>
              ))}
            </div>
            <div  class="tools-skills-list">
              <h1 class="tool-title">Outils divers</h1>
              <p>{this.props.toolsArray[2].title}</p>
              {this.props.toolsArray[2].map((skill, i) => (
                <div key={i} class="tool-skill">
                  <p> {skill.name}</p>
                  <p> {this.determineLevel(skill.level)}</p>
                </div>
              ))}
            </div >
            <div  class="tool-skill legend">
              <p>{this.level1} Utilisation rare ou depuis peu </p>
              <p>{this.level2} Utilisation fréquente </p>
              <p>{this.level3} Utilisation trés fréquente </p>
              <p>{this.level4} Maîtrise complete de l'outil</p>
            </div>

          </div>
       </div>
       
        }    
      </div>
      )
    }
}

export default SkillsList