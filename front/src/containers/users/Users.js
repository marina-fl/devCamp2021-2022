import { useQuery } from 'react-query';

import Users from '../../components/body/Users';
import getUsers from './api/crud';

function UsersContainer() {
	const { isFetching, data } = useQuery('users', () => getUsers());
	const users = data?.data || [];

	return (
		<div>
			{isFetching && <div>Loading...</div>}
			<Users users={users} />
		</div>
	);
};

export default UsersContainer;