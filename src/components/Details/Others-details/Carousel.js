import React, { Component } from 'react';
import Datas from '../../../datas/datas';

// import images because I don't succeed with other option
import aff1 from '../../../assets/realisations-img/aff1.png';
import aff2 from '../../../assets/realisations-img/aff2.png';
import aff3 from '../../../assets/realisations-img/aff3.png';

class DemoCarousel extends Component {
    constructor(props){
        super(props)

    }


 
    

    render() {

        return (
            <div>
                {Datas.Realisations.realisations.map((realisation) => (
                <div>
                    {realisation.link == "aff1.png" ? <img src={aff1} />: null }
                    {realisation.link == "aff2.png" ? <img src={aff2} />: null }
                    {realisation.link == "aff3.png" ? <img src={aff3} />: null }
                    <p className="legend">{realisation.title}</p>

                </div>
                ))}
                {/* <img src="../../../assets/realisations-img/aff1.png"/> */}
                </div>
        );
    }
};

export default DemoCarousel