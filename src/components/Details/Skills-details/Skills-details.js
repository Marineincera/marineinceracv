import React from 'react';
import './Skills-details.scss';
import Datas from '../../../datas/datas';
import SkillsList from './Skills-list/Skills-list';
import {FaLaptopCode, FaProjectDiagram, FaCashRegister, FaLaptop } from "react-icons/fa";


class SkillsDetails extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isVisibleSkillsList : false,
            classOfIconTitle : "skill-title",
            classIconTitleHover: "skill-title-hover"
        }
        this.skillsToDisplay = []
        this.title = " "

        
        this.developmentToolsArray = []
        this.communicationToolsArray = []
        this.softwaresArray = []
        // this.toolsArray = [this.developmentToolsArray, this.communicationToolsArray, this.softwaresArray]
     
    }


    openList = (array, title) => {
        console.log(array);
        this.skillsToDisplay = array;
        this.title = title;
        this.determineToolsArrays()
        this.setState(state => ({ isVisibleSkillsList: !state.isVisibleSkillsList}))
    }

    determineToolsArrays = () => {
        let devArray = []
        let commArray = []
        let toolsArray = []
        Datas.Skills[3].skillsList.map((item, i) => {
          i++
         switch(item.section){
            case "Web Development":
                 devArray.push(item)
                 break;
            case "Communication":
                commArray.push(item)
                break;
            case "Tools":
                toolsArray.push(item)
                break;
            default:
                console.log("error");
         }
         if(i === Datas.Skills[3].skillsList.length){
             this.developmentToolsArray = devArray;
             this.communicationToolsArray = commArray;
             this.softwaresArray = toolsArray;
         }
         
        })
      }

    changeIconTitleClass = () => {
        this.setState(state => ({ classOfIconTitle : "skill-title-hover"})) 
    }

    render() {
      return (
            <div class="container-details skills-details-container">
                {this.skillsToDisplay.length > 0 && this.state.isVisibleSkillsList? 
                    <SkillsList datas={this.skillsToDisplay} title={this.title} toolsArray={[this.developmentToolsArray,this.communicationToolsArray,this.softwaresArray]}/>  

                :
                    <div class="skills-details-link">
                        <div class="skill-icon-title" onClick={() => this.openList(Datas.Skills[0].skillsList, Datas.Skills[0].title)} onMouseEnter={this.changeIconTitleClass}>
                            <FaLaptopCode class="icon-link skill-icon" /> 
                            <p>{Datas.Skills[0].title}</p>
                        </div>
                        <div class="skill-icon-title" onClick={() => this.openList(Datas.Skills[1].skillsList, Datas.Skills[1].title)} onMouseEnter={this.changeIconTitleClass}>
                            <FaProjectDiagram class="icon-link" /> 
                            <p>{Datas.Skills[1].title}</p>
                        </div>
                        <div class="skill-icon-title" onClick={() => this.openList(Datas.Skills[2].skillsList, Datas.Skills[2].title)} onMouseEnter={this.changeIconTitleClass}>
                            <FaCashRegister class="icon-link" />
                            <p>{Datas.Skills[2].title}</p>
                    </div>
                    <div class="skill-icon-title" onClick={() => this.openList(Datas.Skills[3].skillsList, Datas.Skills[3].title)} onMouseEnter={this.changeIconTitleClass}>
                            <FaLaptop class="icon-link" />
                            <p>{Datas.Skills[3].title}</p>
                        </div>
                    </div>
                }
            </div>
      
        )
    }
}

export default SkillsDetails