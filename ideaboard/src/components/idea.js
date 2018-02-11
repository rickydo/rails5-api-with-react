import React, {Component} from 'react';

// stateless functional "dumb" component
// doesn't handle any state - just a pure function that accepts data
// and returns JSX

// const Idea = ({idea}) =>
//   <div className="tile" key={idea.id}>
//     <h4>{idea.title}</h4>
//     <p>{idea.body}</p>
//   </div>

// convert to class component from functional component
// so that when we can click on a tile we can edit it
// we do this because we have to add a function

class Idea extends Component {
  handleClick = () => {
    this.props.onClick(this.props.idea.id)
  }

  handleDelete = () => {
    this.props.onDelete(this.props.idea.id)
  }

  render() {
    return (
      <div className="tile">
        <span className="deleteButton" onClick={this.handleDelete}>
          x
        </span>
        <h4 onClick={this.handleClick}>
          {this.props.idea.title}
        </h4>
        <p onClick={this.handleClick}>
          {this.props.idea.body}
        </p>
      </div>
    )
  }
}

export default Idea
