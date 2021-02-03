import axios from 'axios';
import { createServer, Response, Model } from 'miragejs';

// function
const generateToken = () => Math.random().toString(36).substr(2);
// server
export const mockServer = ({ environment = 'test' }) => {
    const token = generateToken();

    createServer({
        environment,
        // data
        models: {
            user: Model,
            confirm: Model,
        },
        seeds(server) {
            server.schema.create("user", { email: "admin@gmail.com", password: "qwerty", confirmed: true});
            server.schema.create("user", { email: "confirm@gmail.com", password: "qwerty", confirmed: false});
            server.schema.create("confirm", {userId: 2, token: "ABCDEF"});
        },
        // route
        routes() {
            this.timing = 1000;
            this.namespace = "api";
            this.post('/user/login', (schema, request) => {
                const requestUser = JSON.parse(request.requestBody);
                const responseUser = schema.users.findBy({ email: requestUser.email, password: requestUser.password});
                if(responseUser)
                    if(responseUser.confirmed)
                        return new Response(200, { }, { id: responseUser.id, email: responseUser.email, token: token });
                    else
                        return new Response(401, { }, { error: { message: `Email "${requestUser.email}" is not confrimed yet.` }});
                else
                    return new Response(401, { }, { error: { message: 'Incorrect email address and / or password.' }});
            });

            this.get('/user/confirm', (schema, request) => {
                const confirmReqeustToken = request.queryParams.token;
                const registeredConfirmRequest = schema.confirms.findBy({token: confirmReqeustToken});
                if(registeredConfirmRequest) {
                    const targetUser = schema.users.find(registeredConfirmRequest.userId);
                    targetUser.update({ confirmed: true});
                }
            });

            this.post('/user/signup', (schema, request) => {
                const requestUser = JSON.parse(request.requestBody);
                const isExistUser = schema.users.findBy({ email: requestUser.email });
                if(isExistUser) {
                    if(isExistUser.confirmed === true)
                        return new Response(409, {}, { error: { message: `'${requestUser.email}' already signed up. Try login.`}});
                    else
                        return new Response(409, {}, {error: { message: `'${requestUser.email}' needs confirmed. Check your email.`}});
                } else {
                    const responseUser = schema.users.create({ email: requestUser.email, password: requestUser.password, confirmed: false});
                    const confirmToken = generateToken();
                    schema.confirms.create({ userId: responseUser.id, token: confirmToken});
                    setTimeout(() => {axios.get(`/api/user/confirm?token=${confirmToken}`)}, (3 * 1000));
                    return new Response(201, {}, { id: responseUser.id, email: responseUser.email });
                }
            });
        },
    });
}
export default mockServer;
