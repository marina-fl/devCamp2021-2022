import { apiClient } from '../../../config/axios';

export const createProfile = async ({ data }) => {
	return apiClient.post('/users', data, {
		headers: {'Content-Type': 'multipart/form-data'}
	});
};
export const editProfile = async (iduser, data) => {
	return apiClient.put(`/users/${iduser}`, data);
};

export const getUsers = async () => {
	return apiClient.get('/users');
};

export const getProfile = async (id) => {
	return apiClient.get(`/users/${id}`);
};
