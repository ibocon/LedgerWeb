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
            confirm: Model,
        },
        seeds(server) {
            server.schema.create("user", { email: "admin@gmail.com", password: "qwerty", confirmed: true});
            server.schema.create("user", { email: "confirm@gmail.com", password: "qwerty", confirmed: false});
            server.schema.create("confirm", {userId: 1, token: "ABCDEF"});
        },
        // route
        routes() {
            this.timing = 1000;
            this.namespace = "api";
            this.post('/user/login', (schema, request) => {
                const requestUser = JSON.parse(request.requestBody);
                // let responseUser = { id: null, email: null };
                // if(requestUser.email === "admin@gmail.com" && requestUser.password === "qwerty" ) {
                //     responseUser.id = 1;
                //     responseUser.email = "admin@gmail.com"
                // }
                // 2021.01.21 TODO responseUser 가 null 인 원인을 찾자.
                const responseUser = schema.users.find((user) => {
                    return user.email === requestUser.email && user.password === requestUser.password;
                });
                if(responseUser)
                    return new Response(200, { }, { id: responseUser.id, email: responseUser.email, token: token });
                else
                    return new Response(401, { }, { error: { message: "login fail." }});
            });

            this.get('/user/confirm', (schema, request) => {
                const confirmReqeustToken = request.queryParams.token;
                const registeredConfirmRequest = schema.confirms.find((confirm) => confirm.token === confirmReqeustToken);
                if(registeredConfirmRequest) {
                    const targetUser = schema.users.find((user) => user.id === registeredConfirmRequest.userId);
                    targetUser.confirmed = true;
                    targetUser.save();
                }
            });
        },
    });
}
export default mockServer;
