import User from '../user/User';
import PropTypes from 'prop-types';

function Users(props){
	const { users } = props;
	return (
		<div>
			{users.map(({ id, name }) => (
                <User
                    key={id}
                    id={id}
                    name={name}
                />
			))}
		</div>
	);
};

Users.propTypes = {
	users: PropTypes.array,
};

export default Users;