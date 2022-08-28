import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = 'Superadvanced web and mobile programming'
  const part1 = {
    name: 'Basics of React',
    exercises: 8
  } 
  const part2 = {
    name: 'Using props',
    exercises: 10
  }
  const part3 = {
    name: 'Component states',
    exercise: 12
  }

  return (
    <div>
      <p>{course}</p>
      <p>{part1.name}{part1.exercises}</p>
      <p>{part2.name}{part2.exercises}</p>
      <p>{part3.name}{part3.exercises}</p>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))

