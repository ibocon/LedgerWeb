import { StaticContext } from 'react-router';
import { RouteComponentProps } from "react-router-dom";
import { LocationState } from 'history';

declare global {
    interface BasicRouteComponentProps extends RouteComponentProps<{}, StaticContext, LocationState> {}
    type AsyncStatus = 'idle' | 'pending' | 'fulfilled' | 'rejected';
    interface AntdAlertOptions {
        type: 'success' | 'info' | 'warning' | 'error';
        message: React.ReactNode;
    }
    interface LoginRequest {
        email: string;
        password : string;
        isStaySignedIn: boolean;
    }
    interface SignupRequest {
        email: string;
        password: string;
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