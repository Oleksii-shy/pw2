import Posts from "../posts/Posts";
import {useState} from "react";
import './User.css'

export default function User({item: {id, name, email}}) {
    let [switcher, setSwitcher] = useState('hide')
    return (
        <div>
            <h4>{id}. {name}</h4>
            <p>{email}</p>
            <button onClick={() => {
                if (switcher === 'hide') {
                    setSwitcher('show')
                } else if (switcher === 'show') {
                    setSwitcher('hide')
                }
            }
            }>Posts
            </button>
            <div className={switcher}>
                <Posts userId={id}/>
            </div>
        </div>
    );
}