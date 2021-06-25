import User from "../user/User";

export default function Users({item}) {
    return (
        <div>
            {item.map(value => <User key={value.id} item={value}/>)}
        </div>
    );
}