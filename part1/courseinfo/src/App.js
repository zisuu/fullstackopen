const Content = (props) => {
    console.log(props)
    return (
        <div>
            <p>{props.parts[0].name} {props.parts[0].exercises}</p>
            <p>{props.parts[1].name} {props.parts[1].exercises}</p>
            <p>{props.parts[2].name} {props.parts[2].exercises}</p>
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
    for (let i = 0; i < props.parts.length; i++) {
        total += props.parts[i].exercises;
    }
    return (
        <p>Number of exercises: {total}</p>
    )
}

const App = () => {
    // const course = 'Half Stack application development'
    // const parts = [
    //     {
    //         part: 'Fundamentals of React',
    //         exercises: 10
    //     },
    //     {
    //         part: 'Using props to pass data',
    //         exercises: 7
    //     },
    //     {
    //         part: 'State of a component',
    //         exercises: 14
    //     },
    // ]
    const course = {
        name: 'Half Stack application development',
        parts: [
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
    }
    return (
        <div>
            <Header course={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
}

export default App