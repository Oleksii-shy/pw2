import './App.css';
import {useEffect, useState} from "react";
import {getPosts, getUsers} from "./services/API";
import Users from "./components/users/Users";


function App() {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => {
            setUsers(value.data);
        })
    }, []);



    return (
        <div>
            <Users item={users}/>
        </div>
    );
}

export default App;
