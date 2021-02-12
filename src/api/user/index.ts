// module
import axios from 'axios';
// source
import client, { FailResponse, isFailResponse } from 'src/api/client';
import token from 'src/api/token';
import { signup } from './signup';
import { login } from './signin';
interface UserResponse {
    data : {
        id: string;
        email: string;
    }
}
const isUserResponse = (response : any) : response is UserResponse => {
    if("data" in response) {
        if( "id" && "email" in response.data) {
            return (
                typeof response.data.id === "string"
                && typeof response.data.email === "string"
            ); 
        }
    }
    return false;
}
// service
export const UserService = {
    get: async ({id} : {id: string | number}) : Promise<UserModel | Fail> => {
        try{
            const response = await client.get<UserResponse | FailResponse>(`/api/user/${id}`, {
                headers: { Authorization: `Bearer ${token.get()}` }
            });
    
            if(isUserResponse(response))
                return { id: parseInt(response.data.id), email: response.data.email };
            if(isFailResponse(response))
                return response.data;
    
            return { error: { message: 'server response is not correctly formatted.' } };
        } catch(error) {
            if(axios.isAxiosError(error))
            if(isFailResponse(error.response))
                return error.response.data;
            throw error;
        }
    },
    login: login,
    logout: async () : Promise<void | Fail> => {
        try{
            client.get<UserResponse | FailResponse>(`/api/user/logout`, {
                headers: { Authorization: `Bearer ${token.get()}` }
            });
            token.clear();
            return;
        } catch(error) {
            if(axios.isAxiosError(error))
            if(isFailResponse(error.response))
                return error.response.data;
            throw error;
        }
    },
    signup: signup,
};
export default UserService;