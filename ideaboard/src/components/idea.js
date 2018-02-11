import React from 'react';

// stateless functional "dumb" component
// doesn't handle any state - just a pure function that accepts data
// and returns JSX

const Idea = ({idea}) =>
  <div className="tile" key={idea.id}>
    <h4>{idea.title}</h4>
    <p>{idea.body}</p>
  </div>

export default Idea
