// module
import client from './client';
import token from './token';
// type
interface UserResponse extends UserModel {
    token : string;
}
// service
export const UserService = {
    get: async (email : string) : Promise<UserModel> => {
        var response = await client.get<UserModel>(`/api/user/${email}`, {
            headers: { Authorization: `Bearer ${token.get()}` }
        });
        return response.data;
    },
    login: async (request : LoginRequest): Promise<UserModel> => {
        try{
            let response = await client.post<UserResponse>(`/api/user/login`, {
                email: request.email,
                password: request.password,
            });
            token.set(response.data.token, request.isStaySignedIn);
            return { id: response.data.id, email: response.data.email };
        } catch {
            token.clear();
            return { id: null, email: null };
        }
    }
};
export default UserService;