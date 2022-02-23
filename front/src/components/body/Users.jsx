import PropTypes from "prop-types";

function Users(props) {
  const { users } = props;
  return (
    <div>
      {users.map(({ idusers, user_name }) => (
        <div key={idusers}>
          <p>{user_name}</p>
        </div>
      ))}
    </div>
  );
}

Users.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      fname: PropTypes.string.isRequired,
      lname: PropTypes.string,
      iduser: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Users;
