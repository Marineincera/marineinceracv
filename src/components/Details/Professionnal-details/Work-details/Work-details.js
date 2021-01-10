import React from 'react';
import '../Work-details/work-details.css';
import WorkDescription from './Work-description/Work-description'


class WorkDetails extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            details: false
        }

    }

openOrCloseDeTails = () => {
    this.setState(state => ({ details : !state.details}))
}


    render() {
        return (
           
            <div key={this.props.item.id} class="pro-case">
                    {this.state.details ?
                <div>
                    <p>{this.props.item.description}</p>
                    <p onClick={this.openOrCloseDeTails}>x</p>
                </div>
            : 
                <div class="pro-section">
                    <img src={this.props.item.img}/>
                    <div class="pro-text-contain">
                        <p class="pro-text">{this.props.item.workTitle}</p>
                        <p class="pro-text">{this.props.item.company}</p>
                        <p class="pro-text">{this.props.item.date}</p>
                        <p class="pro-text">{this.props.item.city}</p>
                        <p onClick={this.openOrCloseDeTails}>+</p>
                    </div>
                </div>
    }
            </div>
        )
    }
}

export default WorkDetails
