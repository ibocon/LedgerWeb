// module
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { Route, Redirect, RouteProps, useHistory } from "react-router-dom";
// source
import { useAppDispatch, getUser, selectUserId, notify } from "src/app/feature";
import { isFail } from "./type";
// component
export const PrivateRoute = ({ children, ...rest }: RouteProps) => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const currentUserId = useSelector(selectUserId);

  useEffect(() => {
    const validateCurrentUser = async () => {
      if (currentUserId) {
        const validateResult = unwrapResult(
          await dispatch(getUser({ id: currentUserId }))
        );
        if (isFail(validateResult)) {
          dispatch(
            notify({
              level: "warning",
              message: `${validateResult.error.message}`,
            })
          );
          history.push("/user/login");
        }
      }
    };
    validateCurrentUser();
  });

  let isAuthenticated = false;
  if (currentUserId) isAuthenticated = true;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated === true ? (
          children
        ) : (
          <Redirect
            to={{ pathname: "/user/login", state: { from: location } }}
          />
        )
      }
    />
  );
};
export default PrivateRoute;
