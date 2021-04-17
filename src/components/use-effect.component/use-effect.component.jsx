import React, { useState, useEffect } from "react";

import Card from "../card-component/card-component";


const UseEffectExample = () => {
    const [user, setUser] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users?username=${searchQuery}`);
            const jsonData = await res.json();
            setUser(jsonData[0]);
        };
        fetchData();
    }, [searchQuery]);


    return (
        <Card>
            <input type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
            />

            {
                user ?
                    (
                        <div>
                            <p>Name: {user.name}</p>
                            <p>Username: {user.username}</p>
                            <p>Email: {user.email}</p>
                        </div>

                    ) : (
                        <p>User not found</p>
                    )
            }

        </Card>
    )
};

export default UseEffectExample;