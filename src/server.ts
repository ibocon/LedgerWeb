import { createServer } from 'miragejs';
export const mockServer = ({ environment = 'test' } : {environment : string}) => {
    createServer({
        environment,
        // route
        routes() {
            this.namespace = "api";
            this.post('/user/login', (schema, request) => {
                return { token: "eyJhbGciOiJIUzI1NiIsInR5cC" };
            });
        },
    });
}
export default mockServer;
