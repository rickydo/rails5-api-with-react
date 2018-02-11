import React, {Component} from 'react';
import axios from 'axios';

class IdeaForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      title: this.props.idea.title,
      body: this.props.idea.body
    }
  }

  handleInput = (e) => {
    this.props.resetNotification()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleBlur = (e) => {
    const idea = {
      title: this.state.title,
      body: this.state.body
    }

    axios.put(
      `http://localhost:3001/api/v1/ideas/${this.props.idea.id}`,
      {
        idea: idea
      }
    )
    .then(res => {
      console.log(res);
      // send edited data to IdeasContainer so that it can update its state too
      // otherwise state.ideas wont have updated value of the idea we just edited

      this.props.updateIdea(res.data);
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className='tile'>
        <form onBlur={this.handleBlur}>
          <input type="text" className="input" name="title" placeholder='Enter a Title'
          value={this.state.title} onChange={this.handleInput}/>
          <textarea name="body" className="input" placeholder="Describe your idea"
            valeu={this.state.body} onChange={this.handleInput}></textarea>
        </form>
      </div>
    )
  }
}

export default IdeaForm
