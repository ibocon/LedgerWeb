// module
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router-dom';
// source
import { useAppDispatch } from 'src/app/store';
import { getUser, selectUserId } from 'src/app/feature';
import { isUserModel } from 'src/app/component';
import { unwrapResult } from '@reduxjs/toolkit';
// component
export const PrivateRoute = ({ children, ...rest } : RouteProps) => {
    const dispatch = useAppDispatch();
    const [isValid, setIsValid] = useState(false);
    const currentUserId = useSelector(selectUserId);

    useEffect(() => {
        const validateCurrentUser = async () => {
            if(currentUserId) {
                const currentUserModel = unwrapResult(await dispatch(getUser({id: currentUserId})));
                if(isUserModel(currentUserModel))
                    setIsValid(true);
            }
        };
        validateCurrentUser();
    });

    return (
        <Route
            {...rest}
            render = {({location}) => 
                isValid === true ? ( children ) : 
                (<Redirect to= {{ pathname: '/user/login', state:{ from: location }}} />)
            }
        />
    );
}
export default PrivateRoute;