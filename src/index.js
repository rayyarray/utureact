import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <div>
      <p>{props.courseName}</p>
    </div>
  )
}
const Contents = (props) => {
    return(
      <div>
        <p>{props.firstPart}: {props.firstExercises} exercises</p>
        <p>{props.secondPart}: {props.secondExercises} exercises</p>
        <p>{props.thirdPart}: {props.thirdExercises} exercises</p>
      </div>
    )
}
const Total = (props) => {
  return(
    <div>
      <p>Total: {props.firstExercises + props.secondExercises + props.thirdExercises} exercises</p>
    </div>
  )
}
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
      <Header courseName={course}/>
      <Contents firstPart={parts[0].name}firstExercises={parts[0].exercises}secondPart={parts[1].name}secondExercises={parts[1].exercises}thirdPart={parts[2].name}thirdExercises={parts[2].exercises}/>
      <Total firstExercises={parts[0].exercises}secondExercises={parts[1].exercises}thirdExercises={parts[2].exercises}/>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))

