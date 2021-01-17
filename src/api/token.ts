// token
const tokenKey = "Token";
export const Token = {
    get: () : string | null => {
        let token = sessionStorage.getItem(tokenKey);
        if(token) 
            return token;
        else
            return localStorage.getItem(tokenKey);
    },
    set: (token : string, isStaySignIn : boolean) : void => {
        if(isStaySignIn)
            localStorage.setItem(tokenKey, token);
        else
            sessionStorage.setItem(tokenKey, token);
    },
    clear: () : void => {
        sessionStorage.removeItem(tokenKey);
        localStorage.removeItem(tokenKey);
    }
}
export default Token;