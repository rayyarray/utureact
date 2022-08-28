import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = 'Superadvanced web and mobile programming'
  const parts = [
    {
    name: 'Basics of React',
    exercises: 8
    },
    {
    name: 'Using props',
    exercises: 10
    },
    {
    name: 'Component states',
    exercises: 12
    }
  ]
  return (
    <div>
      <p>{course}</p>
      <p>{parts[0].name}{parts[0].exercises}</p>
      <p>{parts[1].name}{parts[1].exercises}</p>
      <p>{parts[2].name}{parts[2].exercises}</p>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))

