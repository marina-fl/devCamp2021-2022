import React from "react";
import PropTypes from "prop-types";
import Profile from "./CreateProfile";

const UserProfile = (props) => {
  const { profile } = props;

  return (
    <div>
      {profile.map(({ idusers, user_name, about, email, phone }) => (
        <Profile
          key={idusers}
          id={idusers}
          user_name={user_name}
          about={about}
          phone={phone}
          email={email}
        />
      ))}
    </div>
  );
};

UserProfile.propTypes = {
  profile: PropTypes.array,
};

export default UserProfile;
