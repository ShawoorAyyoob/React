import './CourseList.css';

function CourseList() {
  const courses = ["Web Design", "Excel", "Java", "Data Science", "React"];

  return (
    <div>
      <h2 className="text-Primary">Course List</h2>
      <ul className="list-group">
        {courses.map((course) => (
          <li className="list-group-item ">{course} </li>
        ))}
      </ul>
    </div>
  );
}
export default CourseList;
