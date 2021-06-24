import Posts from "../posts/Posts";
import './User.css'
import {useState} from "react";

export default function User({item: {id, name}}) {
    let [switcher, setSwitcher] = useState('show');
    return (
        <div>
            {id}. {name}
            <button onClick={() => {
                if (switcher === 'hide') {
                    setSwitcher('show')
                } else if (switcher === 'show') {
                    setSwitcher('hide')
                }
            }
            }>
                Post
            </button>
            <div className={switcher}>
                <Posts userId={id}/>
            </div>
        </div>
    );
}