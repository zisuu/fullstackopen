const Content = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.content.part} {props.content.exercises}</p>
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course}</h1>
  )
}

const Total = (props) => {
  console.log(props);
  let total = 0;
  for (let i = 0; i < props.total.length; i++) {
    total += props.total[i].exercises;
  }
  return (
    <p>Number of exercises: {total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const content = [
    { part: 'Fundamentals of React', exercises: 10 },
    { part: 'Using props to pass data', exercises: 7 },
    { part: 'State of a component', exercises: 14 },
  ]

  return (
    <div>
      <Header course={course} />
      {content.map((item, index) => (
        <Content key={index} content={item} />
      ))}
      <Total total={content} />
    </div>
  )
}

export default App