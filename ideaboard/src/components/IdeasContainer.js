import React, {Component} from 'react';
import axios from 'axios';
import Idea from './idea';
import update from 'immutability-helper';
import IdeaForm from './IdeaForm';
import './../App.css';

class IdeasContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      ideas: [],
      editingIdeaId: null,
      notification: ''
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
      // make new copy of state ideas
      // splice to insert new idea at beginning of array
      const ideas = update(this.state.ideas, {
        $splice: [[0,0,res.data]]
      })
      this.setState({
        ideas: ideas,
        editingIdeaId: res.data.id // we added a new idea and we want to edit immediately
      })
    })
    .catch( err => console.log(err))
  }

  updateIdea = (idea) => {
    // first find index of edited idea in array
    const ideaIndex = this.state.ideas.findIndex(x => x.id === idea.id)
    const ideas = update(this.state.ideas, {
      [ideaIndex]: {$set: idea} // use $set to replace the old value with new one
    })
    this.setState({
      ideas: ideas,
      notification: 'All changes saved'
    })
  }

  resetNotification = () => {
    this.setState({
      notification: ''
    })
  }

  render(){
    return (
      <div>
        {this.state.ideas.map((idea) => {
          // render editing form if idea id is equal to editing id
          if(this.state.editingIdeaId === idea.id) {
            return (<IdeaForm idea={idea} key={idea.id} updateIdea={this.updateIdea}
            resetNotification={this.resetNotification}/>)
          }
          else {
            return (<Idea idea={idea} key={idea.id}/>)
          }
        })}
        <button className="newIdeaButton" onClick={this.addNewIdea}>
          New Idea
        </button>
        <span className="notification">
          {this.state.notification}
        </span>
      </div>
    )
  }
}

export default IdeasContainer;
