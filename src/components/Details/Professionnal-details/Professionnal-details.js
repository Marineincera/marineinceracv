import React from 'react';
import WorkDetails from '../../Details/Professionnal-details/Work-details/Work-details';
import '../Professionnal-details/Professionnal-details.css';
import Datas from '../../../datas/datas';
import { FaLaptopCode, FaPlaneDeparture, FaCashRegister } from 'react-icons/fa';


class ProfesionnalDetails extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            section : "null",
            datas: [],
            devJobs : Datas.Profesionnal[0]['Développeuse web et web-mobile junior'],
            tourismJobs: Datas.Profesionnal[1]['Tourisme'],
            othersJobs: Datas.Profesionnal[2]['Accueil, Vente et Réception'],
            classOfIconTitle : "pro-icon-titles"
        }   
    }

    openSection = (section) => {
        if(this.state.section !== section){
          this.setState(state => ({ section : section}))
        } 
        if(this.state.section == section) {
          this.setState(state => ({ section : "null"}))
        }
      }

    changeIconTitleClass = () => {
        this.setState(state => ({ class : "pro-icon-title-hover"}))
    }


    render() {
        return (
            <div class="pro-container container-details">
                {this.state.section !== "null" ? <p onClick={()=>{ this.setState(state => ({ section : "null"}))}}>CLXSE</p> : null}
                
                {this.state.section !== "null" ? 
                    <div class="buttons-group">
                        <button onClick={() => this.openSection("development")}>Développeuse web et web-mobile junior</button>
                        <button onClick={() => this.openSection("tourism")}>Chargée de projet Tourisme</button>
                        <button onClick={() => this.openSection("others")}>Accueil, Vente et Réception</button>
                    </div>
                : null }
                {this.state.section === "null" ? 
                <div class="icons-group">
                    <div onClick={() => this.openSection("development")} onMouseEnter={this.changeIconTitleClass} class="icon-section">
                        <FaLaptopCode class="icon icon-link" />
                        <p class={this.state.classOfIconTitle}>Développement web</p>
                    </div>
                    <div onClick={() => this.openSection("tourism")} onMouseEnter={this.colorIfMouseOver} class="icon-section">
                        <FaPlaneDeparture class="icon icon-link" />
                        <p class={this.state.classOfIconTitle}>Tourisme</p>
                    </div>
                    <div onClick={() => this.openSection("others")} onMouseEnter={this.colorIfMouseOver} class="icon-section">
                        <FaCashRegister class="icon icon-link" />
                        <p class={this.state.classOfIconTitle}>Accueil et vente</p>
                    </div>
                </div>
                : null}
                {this.state.section === "development"? 
                    <div class="work-section">
                            <h1>Experience : 1 an</h1>
                            <div class="work-details">
                                {this.state.devJobs.map((item) => (
                                    <WorkDetails item={item} class/>))}
                            </div>
                    </div>
                 : null}
                {this.state.section === "tourism"? 
                    <div class="work-section">
                            <h1>Experience : 5 ans</h1>
                            <div class="work-details">
                                {this.state.tourismJobs.map((item) => (
                                <WorkDetails item={item}/>))}
                            </div>
                    </div>
                : null}
                {this.state.section === "others"?
                    <div class="work-section">
                            <h1>Experience : 4 ans</h1>
                            <div class="work-details">
                                {this.state.othersJobs.map((item) => (
                                <WorkDetails item={item}/>))}
                            </div>
                    </div>
                : null}
        </div>
    
        )
    }
}

export default ProfesionnalDetails
