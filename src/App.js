import './App.css';
import {useEffect, useState} from "react";
import {getUsers} from "./services/API";
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
