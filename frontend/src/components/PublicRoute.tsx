import React from 'react';
import {Navigate} from 'react-router-dom';
import {useUser} from "../hooks/UserProdiver";

type RouteProps = {
    component: any;
    restricted: boolean;
}
const PublicRoute = ({component: Component, restricted, ...rest}: RouteProps) => {
    const {isLogin} = useUser();

    if (isLogin && restricted) {
        return <Navigate to="/dashboard"/>
    }

    return (
        <Component />
    );
};

export default PublicRoute;