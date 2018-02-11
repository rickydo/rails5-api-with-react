import React, {Component} from 'react';
import axios from 'axios';
import Idea from './idea';
import update from 'immutability-helper';
import './../App.css';

class IdeasContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      ideas: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:3001/api/v1/ideas.json')
      .then(response => {
        console.log(response)
        this.setState({
          ideas: response.data
        })
      })
      .catch(error => console.log(error))
  }

  addNewIdea = () => {
    axios.post(
      'http://localhost:3001/api/v1/ideas', {
        idea: {
          title: '',
          body: ''
        }
      }
    )
    .then(res => {
      console.log(res);
    })
    .catch( err => console.log(err))
  }

  render(){
    return (
      <div>
        {this.state.ideas.map((idea) => {
          return (
            <Idea idea={idea} key={idea.id}/>
          )
        })}
        <button className="newIdeaButton" onClick={this.addNewIdea}>
          New Idea
        </button>
      </div>
    )
  }
}

export default IdeasContainer;
