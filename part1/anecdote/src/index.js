import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <button onClick={props.click()}>{props.text}</button>
  );
}
const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, castVote] 
              = useState(new Array(anecdotes.length).fill(0));
  const voteCast = () => {
    let temp = [...votes];
    temp[selected] += 1;
    castVote(temp);
  }

  const selectedSet = () => {
    const length = anecdotes.length;
    setSelected((selected + 1) % length)
  }
  const max = Math.max(...votes);
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}<br />
      has {votes[selected]} votes.<br />
      <Button text="vote" click = {() => voteCast} />
      <Button text="next anecdote" click = {() => selectedSet}/> <br />
      <h1>Anecdote with most votes</h1>
      {props.anecdotes[votes.indexOf(max)]}


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
)
