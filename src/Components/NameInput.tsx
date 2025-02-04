import { useState } from "react";
const NameInput = () => {
  const [user, setUser] = useState({
    name: "",
    age: "",
    course: "",
  });

  return (
    <div>
      <input
        type="name"
        value={user.name}
        onChange={(e) =>
          setUser({
            ...user,
            name: e.target.value,
          })
        }
      />
      <br />
      <input
        type="age"
        value={user.age}
        onChange={(e) =>
          setUser({
            ...user,
            age: e.target.value,
          })
        }
      />
      <br />
      <input
        type="course"
        value={user.course}
        onChange={(e) =>
          setUser({
            ...user,
            course: e.target.value,
          })
        }
      />
      <p>
        Name: {user.name} , Age: {user.age}, Course: {user.course}
      </p>
    </div>
  );
};

export default NameInput;
