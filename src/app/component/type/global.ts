import { StaticContext } from 'react-router';
import { RouteComponentProps } from "react-router-dom";
import { LocationState } from 'history';

declare global {
    interface BasicRouteComponentProps extends RouteComponentProps<{}, StaticContext, LocationState> {}
    
    interface LoginRequest {
        email: string;
        password : string;
        isStaySignedIn: boolean;
    }
    interface UserModel {
        id : number | null;
        email : string | null;
    }
    interface Fail {
        error : {
            message : string;
        }
    }
}