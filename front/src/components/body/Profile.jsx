import './Body.css';
import PropTypes from 'prop-types';

function Profile({avatar, name, about}) {
    return (
        <div className="profile_block">
            <img src={avatar} alt='avatar' className="avatar" />

            <p>{name}</p>
            <p>{about}</p>
        </div>
    );
}

Profile.propTypes = {
avatar: PropTypes.string,
name: PropTypes.string.isRequired,
about: PropTypes.string,
}



export default Profile;