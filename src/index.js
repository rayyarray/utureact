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
  return (
    <div>
      <p>{props.firstPart}:{props.firstExercises} exercises</p>
      <p>{props.secondPart}:{props.secondExercises} exercises</p>
      <p>{props.thirdPart}:{props.thirdExercises} exercises</p>
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>Total: {props.firstExercises + props.secondExercises + props.thirdExercises} exercises</p>
    </div>
  )
}
const App = () => {
  const course = 'Superadvanced web and mobile programming'
  const part1 = 'Basics of React'
  const exercises1 = 8
  const part2 = 'Using props'
  const exercises2 = 10
  const part3 = 'Component states'
  const exercises3 = 12

  return (
    <div>
      <Header courseName={course}/>
      <Contents firstPart={part1}firstExercises={exercises1}secondPart={part2}secondExercises={exercises2}thirdPart={part3}thirdExercises={exercises3}/>
      <Total firstExercises={exercises1} secondExercises={exercises2} thirdExercises={exercises3}/>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))

