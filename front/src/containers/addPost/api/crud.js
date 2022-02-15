import { apiClient } from '../../../config/axios';

const addPost = async ({ data }) => {
	return apiClient.post('/posts', data);
};

export default addPost
