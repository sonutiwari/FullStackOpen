import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    );
}

const Content = (props) => {
    return (<div>
        <Part part = {props.parts[0]}/>
        <Part part = {props.parts[1]}/>
        <Part part = {props.parts[2]}/>
    </div>);
}

const Total = (props) => {
    const parts = props.parts;
    const total = parts.reduce((sum, element) => sum + element.exercises, 0);
    return (<p>Number of exercises {total}</p>)
}

const Part = (props) => {
    const {name, exercises} = props.part;
    return (<p>{name} {exercises}</p>)
};
const App = () => { 
  const parts = [
      {
          name : 'Fundamentals of React',
          exercises : 10
      },
      {
        name : 'Using props to pass data',
        exercises : 7
      },
      {
        name : 'State of a component',
        exercises : 14
      }
  ];
  const course = 'Half Stack application development';
  return (
    <div>
      <Header course={course} />
      <Content parts = {parts}/>
      <Total parts = {parts}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));