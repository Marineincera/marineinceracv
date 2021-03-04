import React from 'react';
import './Details-page.css';
import Datas from '../../datas/datas'
import EducationDetails from '../Details/Education-details/Education-details'
import ProfesionnalDetails from './Professionnal-details/Professionnal-details';
import PresentationDetails from './Presentation-details/Presentation-details';
import SkillsDetails from './Skills-details/Skills-details';
import OthersDetails from './Others-details/Others-details';


class DetailsPage extends React.Component {
constructor(props){
  super(props);
  this.state = {
    backgroundColor: this.props.color
  }
}



render() {

  if(this.props.datas === "presentation"){
    return(
      <div class="container-details presentation-container">
        <PresentationDetails identity={Datas.Identity}/>
      </div>
     )
  }
  if(this.props.datas === "education"){  
    return(
      <div class="education-container container-details">
        {Datas.Education.map((item) => (
          <EducationDetails item={item}/>
            ))}
      </div>
     )
  }
  if(this.props.datas === "work"){ 
      return(
      <ProfesionnalDetails/>
     ) 
  }
  if(this.props.datas === "skills"){ 
    return(
    <SkillsDetails/>
   ) 
}
if(this.props.datas === "others"){ 
  return(
  <OthersDetails/>
 ) 
}
}

}

export default DetailsPage