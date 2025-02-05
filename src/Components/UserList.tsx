import { useEffect, useState } from "react";
interface User {
  name: string;
  username: string;
  email: string;
  website: string;
}
function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  };
  useEffect(() => {
    fetchUsers();
  });

  return (
    <>
      {users.map((user) => (
        <div className="card w-75 mb-3">
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text">
              {user.username} <br /> {user.email} <br /> {user.website}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
export default UserList;
