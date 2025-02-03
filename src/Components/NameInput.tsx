import { useState } from "react";
const NameInput = () => {
  const [user, setUser] = useState({
    name: "Name",
    age: "Age",
    course: "Course",
  });

  return (
    <div>
      <input
        type="name"
        value={user.name}
        onChange={(e) =>
          setUser({ name: e.target.value, age: user.age, course: user.course })
        }
      />
      <br />
      <input
        type="age"
        value={user.age}
        onChange={(e) =>
          setUser({ name: user.name, age: e.target.value, course: user.course })
        }
      />
      <br />
      <input
        type="course"
        value={user.course}
        onChange={(e) =>
          setUser({ name: user.name, age: user.age, course: e.target.value })
        }
      />
      <p>
    Name: {user.name} , Age: {user.age}, Course: {user.course}
      </p>
    </div>
  );
};

export default NameInput;
