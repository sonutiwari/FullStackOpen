import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  const {text, fn} = props;
  return (
    <button onClick={fn}>{text}</button>
  );
}

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([]);
  const handleVote = (votes) => {
    if(votes.length > selected){
      votes[selected] = votes[selected] + 1;
      setVotes(selected);
    } else {
      votes.concat(1);
    }
  }
  const handleNextClick = (selected) => {
    setSelected((selected + 1) % votes.length);
  }
  return (
    <div>
      <p>{props.anecdotes[selected]}</p>
      <p>has {props.votes[selected]} votes</p>
      <Button text="vote" fn={handleVote(votes)}/>
      <Button text="next anecdote" fn={handleNextClick(selected, votes)} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
);