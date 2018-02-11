import React, {Component} from 'react';

class IdeasContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      ideas: []
    }
  }

  componentDidMount(){

  }

  render(){
    return (
      <div>
        Ideas
      </div>
    )
  }
}

export default IdeasContainer;
