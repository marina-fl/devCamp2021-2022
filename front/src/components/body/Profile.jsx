import './Body.css';

function Profile(props) {
    return (
        <div className="profile_block">
            <img src={props.avatar} alt='avatar' className="avatar" />

            <p>{props.name}</p>
            <p>{props.about}</p>
        </div>
    );
}

export default Profile;