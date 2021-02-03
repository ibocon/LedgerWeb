// module
import axios from 'axios';
// source
import client, { FailResponse, isFailResponse } from './client';
import token from './token';
// type
interface SignupResponse {
    data : {
        id : string;
        email : string;
    }
}
const isSignupResponse = (response : any) : response is SignupResponse => {
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
interface LoginResponse {
    data : {
        id : string;
        email : string;
        token : string;
    }
}
const isLoginResponse = (response : any) : response is LoginResponse => {
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
            const response = await client.post<LoginResponse | FailResponse>(`/api/user/login`, {
                email: request.email,
                password: request.password,
            });
            if(isLoginResponse(response)) {
                token.set(response.data.token, request.isStaySignedIn);
                return { id: parseInt(response.data.id), email: response.data.email };
            } 
            if(isFailResponse(response)) {
                return response.data;
            }
            return { error: { message: 'server response is not correctly formatted.' } };
        } catch(error) {
            token.clear();
            if(axios.isAxiosError(error))
                if(isFailResponse(error.response))
                    return error.response.data;
            throw error;
        }
    },
    signup: async (request : SignupRequest): Promise<UserModel | Fail> => {
        try{
            const response = await client.post<SignupResponse | FailResponse>(`/api/user/signup`, {
                email: request.email,
                password: request.password,
            });
            if(isSignupResponse(response)) {
                return { id: parseInt(response.data.id), email: response.data.email };
            } 
            if(isFailResponse(response)) {
                return response.data;
            }
            return { error: { message: 'server response is not correctly formatted.' } };
        } catch(error) {
            if(axios.isAxiosError(error))
                if(isFailResponse(error.response))
                    return error.response.data;
            throw error;
        }
    }
};
export default UserService;