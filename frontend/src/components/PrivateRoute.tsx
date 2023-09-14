import React from 'react';
import {Route, Navigate} from 'react-router-dom';
import {useUser} from "../hooks/UserProdiver";

type RouteProps = {
    component: any;
}

const PrivateRoute = ({component: Component, ...rest}: RouteProps) => {
    const {isLogin} = useUser();

    if (!isLogin) {
        return <Navigate to="/signin" />;
    }

    return (
        <Component />
    );
};

export default PrivateRoute;