import Comments from "../comments/Comments";
import './Post.css'
import {useState} from "react";

export default function Post({item: {title, body, id}}) {
    let [switcher, setSwitcher] = useState('hide');
    return (
        <div>
            <h4>
                {id}. {title}
            </h4>
            <p>{body}</p>
            <button onClick={() => {
                if (switcher === 'show') {
                    setSwitcher('hide')
                } else if (switcher === 'hide') {
                    setSwitcher('show')
                }
            }
            }>Comments
            </button>

            <div className={switcher}>
                <Comments postId={id}/>
            </div>

        </div>
    );
}