// module
import client from './client';
import token from './token';
// type
type User = {
    email: string;
};
// service
export const UserService = {
    get: async (email : string) => {
        return client.get<User>(`/api/user/${email}`, {
            headers: { Authorization: `Bearer ${token.get()}` }
        });
    },
    login: async (email : string, password : string, isStaySignedIn : boolean) => {
        try{
            let response = await client.post<{token : string}>(`/api/user/login`, {
                email: email,
                password: password,
            });
            token.set(response.data.token, isStaySignedIn);
            return true;
        } catch {
            token.clear();
            return false;
        }
    }
};
export default UserService;