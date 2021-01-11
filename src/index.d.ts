// module
import { StaticContext } from 'react-router';
import { RouteComponentProps } from "react-router-dom";
import { LocationState } from 'history';

interface BasicParams {

}

export interface BasicRouteComponentProps extends RouteComponentProps<BasicParams, StaticContext, LocationState> {

}