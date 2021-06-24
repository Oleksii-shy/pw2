import {useEffect, useState} from "react";
import {getPosts} from "../../services/API";
import Post from "../post/Post";

export default function Posts({userId}) {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(value => {
            setPosts(value.data)
        })
    }, [])
    const filter = posts.filter(value => value.userId === userId);
    return (
        <div>
            {filter.map(value => <Post key={value.id} item={value}/>)}
        </div>
    )
}