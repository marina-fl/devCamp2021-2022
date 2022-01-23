import { apiClient } from '../../../config/axios';

function getPosts () {
	return apiClient.get('/posts');
};

export default getPosts;