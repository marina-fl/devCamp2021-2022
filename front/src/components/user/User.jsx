import React from "react";
import { userDataType } from "./UserType";

function User({ userData }) {
  return (
    <div>
      <ul>
        <li>{userData.id}</li>
        <li>{userData.age}</li>
        <li>{userData.avatar.file.name}</li>
        <li>{userData.posts[0].title}</li>
        <li>{userData.posts[0].createdAt}</li>
      </ul>
    </div>
  );
}

User.propTypes = {
  userData: userDataType,
};

export default User;

