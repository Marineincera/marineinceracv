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
        this.datas = ""
        this.title = ""

    
    }

    openDetails = (section) => {
        this.datas = section
        this.title = section + "-button"
        console.log(this.title);
        this.setState(state => ({ isDetailsPageOpened: !state.isDetailsPageOpened}))
    }

    
    render() {
        return (
    <div class="wrapper">

        <div onClick={() => { this.setState(state => ({ isDetailsPageOpened: false}))}}>
        {this.state.isDetailsPageOpened ? <button className={this.title}>RETOUR AU MENU</button> : null}
            
        </div>
        {!this.state.isDetailsPageOpened ? 
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
        :
        <div class="details">
             {this.state.isDetailsPageOpened ? <DetailsPage datas={this.datas} />: null}
      
        </div>  
    }
    </div>
      );
    }
  }

  


  export default Homepage