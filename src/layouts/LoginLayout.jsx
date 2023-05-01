import React from 'react';
import NavigationNav from '../pages/Shared/NavigationNav/NavigationNav';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <NavigationNav></NavigationNav>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;