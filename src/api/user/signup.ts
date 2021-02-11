// module
import axios from 'axios';
// source
import client, { FailResponse, isFailResponse } from '../client';
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
export const signup = async (request : SignupRequest): Promise<UserModel | Fail> => {
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
};
export default signup;