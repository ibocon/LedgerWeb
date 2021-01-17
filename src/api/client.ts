// module
import axios from 'axios';
// client
export const client = axios.create({
    baseURL: '',
    headers: {
        'Content-Type' : 'application/json',
    }
});
export default client;