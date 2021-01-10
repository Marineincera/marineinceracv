import React from 'react';




class WorkDescription extends React.Component {
    constructor(props){
        super(props)
        this.state = {
   
        }

    }



    render() {
        return (
          <div>
              <p>{this.props.item.description}</p>
          </div>
        )
    }
}
export default WorkDescription