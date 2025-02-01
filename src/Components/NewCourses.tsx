interface Course{
   id: number;
   Name: string;
   Instructor: string;
}
interface Props{
    list : Course[];
    title : string;
}
function Courses(props:Props){
    return (
        <div>
          <h1>{props.title}</h1>
          <ul className="list-group">
            {props.list.map((course) => (
              <li className="list-group-item">{course.Name} - {course.Instructor}</li>
            ))}
          </ul>
        </div>
      );
    }
    export default Courses;
