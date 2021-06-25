export default function Comment({item: {id, name, email, body}}) {
    return (
        <div>
            <hr/>
            <i>{id}. {name}</i>
            <h4>{email}</h4>
            <p>{body}</p>
            <hr/>
        </div>
    );
}