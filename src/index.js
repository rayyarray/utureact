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
  const part1 = {
    name: 'Basics of React',
    exercises: 8
    }
  const part2 = {
    name: 'Using props',
    exercises: 10
    }
  const part3 ={
    name: 'Component states',
    exercises: 12
    }

  return (
    <div>
      <Header courseName={course}/>
      <Contents firstPart={part1.name}firstExercises={part1.exercises}secondPart={part2.name}secondExercises={part2.exercises}thirdPart={part3.name}thirdExercises={part3.exercises}/>
      <Total firstExercises={part1.exercises}secondExercises={part2.exercises}thirdExercises={part3.exercises}/>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))

