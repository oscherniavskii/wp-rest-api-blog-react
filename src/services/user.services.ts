import { BASE_API_URL } from '../constants';
import { User } from '../types/user.types';

export const getAllUsers = async (): Promise<User[] | undefined> => {
	try {
		const response = await fetch(`${BASE_API_URL}/users`);
		const data = response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const getUserById = async (id: number): Promise<User | undefined> => {
	try {
		const response = await fetch(`${BASE_API_URL}/users/${id}`);
		const data = response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};
