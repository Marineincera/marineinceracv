import React from 'react';
import './Homepage.scss'
import HomepageWrap from './Homepage-wrap/Homepage-wrap';
import DetailsPage from '../Details/Details-page';


class Homepage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isDetailsPageOpened : false
         

        }
        this.datas = "cul"
    
    }

    openDetails = (section) => {
        this.datas = section
        this.setState(state => ({ isDetailsPageOpened: !state.isDetailsPageOpened}))
    }

    
    render() {
        return (
    <div class="wrapper">

        <div onClick={() => { this.setState(state => ({ isDetailsPageOpened: false}))}}>
        {this.state.isDetailsPageOpened ? <p>RETOUR A l'ACCUEIL</p> : null}
            
        </div>

        <div class="container" >
            <div  onClick={() => this.openDetails("presentation")} className="section first">
                <HomepageWrap title="Présentation" description="blabla"></HomepageWrap>
           </div>
           <div class="section" onClick={() => this.openDetails("education")}>
                <HomepageWrap title="Diplômes & Formations" description="blabla" ></HomepageWrap>
           </div>
           <div class="section" onClick={() => this.openDetails("work")}>
                <HomepageWrap title="Expériences Pro" description="blabla" ></HomepageWrap>
            </div>
           <div class="section" onClick={() => this.openDetails("skills")}>
                <HomepageWrap title="Compétences" description="blabla" ></HomepageWrap>
            </div>
           <div class="section" onClick={() => this.openDetails("others")}>
                <HomepageWrap title="Autres" description="blabla" ></HomepageWrap>
            </div>
        </div>
        <div class="details">
             {this.state.isDetailsPageOpened ? <DetailsPage datas={this.datas} />: null}

        </div>
    </div>
      );
    }
  }

  


  export default Homepage