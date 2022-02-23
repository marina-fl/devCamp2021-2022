import { apiClient } from '../../../config/axios';

const createProfile = async ({ data }) => {
	return apiClient.post('/users/:iduser', data, {
		headers: {'Content-Type': 'multipart/form-data'}
	});
};


export default createProfile