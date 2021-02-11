// module
// source
import client from 'src/api/client';
import token from 'src/api/token';
import { signup } from './signup';
import { login } from './signin';
// service
export const UserService = {
    get: async ({id} : {id: string | number}) : Promise<UserModel | Fail> => {
        var response = await client.get<UserModel>(`/api/user/${id}`, {
            headers: { Authorization: `Bearer ${token.get()}` }
        });
        return response.data;
    },
    login: login,
    signup: signup,
};
export default UserService;