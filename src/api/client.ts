// module
import axios from 'axios';
// source
import { isFail } from 'src/app/component';
// common
export interface FailResponse {
    data : Fail
}
export const isFailResponse = (response : any) : response is FailResponse => {
    if("data" in response) {
        if(isFail(response.data)) {
           return true;
        }
    }
    return false;
}
// client
export const client = axios.create({
    baseURL: '',
    headers: {
        'Content-Type' : 'application/json',
    }
});
export default client;