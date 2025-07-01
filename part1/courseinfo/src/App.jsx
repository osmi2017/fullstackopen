const App = () => {
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
  
  const Header = (props) =>{
	  return(
	  <h1>{props.course}</h1>
	  )
  }
  
  const Content =(props) =>{
	
	
	 return (
    <div>
      {props.parts.map((value, index) => (
        <Part key={index} part={value.name} exercises={value.exercises} />
      ))}
    </div>
  );
  }
  
  const Total =(props) =>{
	  let totalExercises = 0;
	  props.parts.forEach((part) => {
    totalExercises += part.exercises;
		});
	  return(
	  <p>Number of exercises {totalExercises}</p>
	  )
  }
  
  const Part =(props) =>{
	  return(
	  <p>
        {props.part} {props.exercises}
      </p>
	  )
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    
    </div>
  )
}

export default App