// module
import axios from 'axios';
// source
import { isFail } from 'src/app/component';
import client from './client';
import token from './token';
// type
interface UserResponse {
    data : {
        id : string;
        email : string;
        token : string;
    }
}
const isUserResponse = (response : any) : response is UserResponse => {
    if("data" in response) {
        if( "id" && "email" && "token" in response.data) {
            return (
                typeof response.data.id === "string"
                && typeof response.data.email === "string"
                && typeof response.data.token === "string"
            ); 
        }
    }
    return false;
}
interface FailResponse {
    data : Fail
}
const isFailResponse = (response : any) : response is FailResponse => {
    if("data" in response) {
        if(isFail(response.data)) {
           return true;
        }
    }
    return false;
}
// service
export const UserService = {
    get: async (email : string) : Promise<UserModel | Fail> => {
        var response = await client.get<UserModel>(`/api/user/${email}`, {
            headers: { Authorization: `Bearer ${token.get()}` }
        });
        return response.data;
    },
    login: async (request : LoginRequest): Promise<UserModel | Fail> => {
        try{
            const response = await client.post<UserResponse | FailResponse>(`/api/user/login`, {
                email: request.email,
                password: request.password,
            });
            if(isUserResponse(response)) {
                token.set(response.data.token, request.isStaySignedIn);
                return { id: parseInt(response.data.id), email: response.data.email };
            } 
            if(isFailResponse(response)) {
                return response.data;
            }
            return { error: { message: 'server response is not correctly formatted.' } };
        } catch(error) {
            token.clear();
            if(axios.isAxiosError(error)) {
                if(isFailResponse(error.response)) {
                    return error.response.data;
                }
            }

            throw error;
        }
    }
};
export default UserService;