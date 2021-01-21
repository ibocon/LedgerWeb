// Type definitions for Ledger 0.1.0
// Project: Ledger
// Definitions by: Yegun Kim <ibocon.tistory.com>

import { StaticContext } from 'react-router';
import { RouteComponentProps } from "react-router-dom";
import { LocationState } from 'history';

declare global {
    interface BasicParams {}
    interface BasicRouteComponentProps extends RouteComponentProps<BasicParams, StaticContext, LocationState> {}
    
    interface LoginRequest {
        email: string;
        password : string;
        isStaySignedIn: boolean;
    }
    interface UserModel {
        id : number | null;
        email : string | null;
    }


}


