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
  const course = {
    name: 'Superadvanced web and mobile programming',
    parts: [
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
}
  return (
    <div>
      <Header courseName={course.name}/>
      <Contents firstPart={course.parts[0].name}firstExercises={course.parts[0].exercises}secondPart={course.parts[1].name}secondExercises={course.parts[1].exercises}thirdPart={course.parts[2].name}thirdExercises={course.parts[2].exercises}/>
      <Total firstExercises={course.parts[0].exercises}secondExercises={course.parts[1].exercises}thirdExercises={course.parts[2].exercises}/>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))

