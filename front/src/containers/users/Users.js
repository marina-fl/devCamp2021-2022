import { useQuery } from 'react-query';
import CircularProgress from '@mui/material/CircularProgress';

import Users from '../../components/body/Users';
import getUsers from './api/crud';

function UsersContainer() {
	const { isFetching, data } = useQuery('users', () => getUsers());
	const users = data?.data || [];

	return (
		<div>
			{isFetching && <CircularProgress color="secondary"/>}
			<Users users={users} />
		</div>
	);
};

export default UsersContainer;