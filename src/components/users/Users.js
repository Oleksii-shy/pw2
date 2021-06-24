import User from "../user/User";

export default function Users({item, showPosts, posts}) {
    return (
        <div>
            {item.map(value => <User key={value.id} item={value}/>)}
        </div>
    );
}