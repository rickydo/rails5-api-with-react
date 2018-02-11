import React, {Component} from 'react';
import axios from 'axios';

class IdeaForm extends Component {
  constructor(props){
    super(props)

    this.state = {

    }
  }


  render() {
    return (
      <div className='tile'>
        <form>
          <input type="text" className="input" name="title" placeholder='Enter a Title'/>
          <textarea name="body" className="input" placeholder="Describe your idea"></textarea>
        </form>
      </div>
    )
  }
}

export default IdeaForm
