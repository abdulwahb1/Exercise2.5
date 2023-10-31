const Course = ({ course }) => {
    const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0)
    
    // Map the parts and render them directly within the Course component
    const partsList = course.parts.map(part => (
      <li key={part.id}>
        {part.name} - {part.exercises} exercises
      </li>
    ));
  
    return (
      <div>
        <h2>{course.name}</h2>
        <ul>
          {partsList}
        </ul>
        <p>Total exercises: {totalExercises}</p>
      </div>
    );
  };

  export default Course