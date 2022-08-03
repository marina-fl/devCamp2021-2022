import React from "react";
import { userDataType } from "./UserDataType";

function User({ id, name }) {
  return (
    <div>
      <ul>
        <li>{id}</li>
        <li>{name}</li>
            </ul>
    </div>
  );
}




User.propTypes = {
  userData: userDataType,
};

export default User;

