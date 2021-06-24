export default function Post({item: {title, body}}) {
    return (
        <div>
            <h5>
                {title}
            </h5>
            <p>
                {body}
            </p>
        </div>
    );
}