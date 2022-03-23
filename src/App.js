

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part1 = (props) => {
  return (
    <div>
      <p>{props.name}  {props.exercises}</p>
    </div>
  )
}

const Part2 = (props) => {
  return (
    <div>
      <p>{props.name}  {props.exercises}</p>
    </div>
  )
}

const Part3 = (props) => {
  return (
    <div>
      <p>{props.name}  {props.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part1 name = {props.parts[0].name} exercises={props.parts[0].exercises}/>
      <Part2 name = {props.parts[1].name} exercises={props.parts[1].exercises}/>
      <Part3 name = {props.parts[2].name} exercises={props.parts[2].exercises}/>
    </div>
  );
}


const Total = (props) => {
  return (
    <div>
      <p>Total exercises:{props.parts[0].exercises + props.parts[1].exercises +props.parts[2].exercises }</p>
    </div>
  )
}





const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts = {parts} />
    </div>
  )
}

export default App
