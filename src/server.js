import { createServer, Response, Model } from 'miragejs';

// type

// function
const generateToken = () => Math.random().toString(36).substr(2);

// server
export const mockServer = ({ environment = 'test' }) => {
    const token = generateToken();

    createServer({
        environment,
        // model
        models: {
            user: Model,
        },
        seeds(server) {
            server.create("user", { email: "admin@gmail.com", password: "qwerty"});
        },
        // route
        routes() {
            this.namespace = "api";
            this.post('/user/login', (schema, request) => {
                const requestUser = JSON.parse(request.requestBody);
                let responseUser = { id: null, email: null };
                if(requestUser.email === "admin@gmail.com" && requestUser.password === "qwerty" ) {
                    responseUser.id = 1;
                    responseUser.email = "admin@gmail.com"
                }
                // 2021.01.21 TODO responseUser 가 null 인 원인을 찾자.
                // const responseUser = schema.users.find((user) => {
                //     return user.email === requestUser.email && user.password === requestUser.password;
                // });
                if(responseUser)
                    return new Response(200, { }, { id: responseUser.id, email: responseUser.email, token: token });
                else
                    return new Response(401, { }, { error: { message: "login fail." }});
            });
        },
    });
}
export default mockServer;
