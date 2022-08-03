import { apiClient } from '../../../config/axios';

const addPost = async ({ data }) => {
	return apiClient.post('/posts', data, {
		headers: {'Content-Type': 'multipart/form-data'}
	});
};


export default addPost
