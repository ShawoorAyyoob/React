import { useState, useEffect } from "react";

type User = {
    id : number;
    name : String;
    phone : String;
    website : String;
}
    function User() {
        const [users, setUsers] = useState<User[]>();
         
        const fetchUser = async () => {
            const response = await fetch (`https://jsonplaceholder.typicode.com/users`);
            const data : User[] = await response.json();
            setUsers(data);
        };
        useEffect(() => {
         fetchUser();
        }, []);

        return(
            <div>
                <h1>List of Users</h1>
                {users?.map((user) => (
                    <><h3>Id -{user.id}</h3><h3>Name -{user.name}</h3><h3>Phone -{user.phone}</h3><h3>Website -{user.website}</h3></>    
               ))}
            </div>
        )
    }

export default User;