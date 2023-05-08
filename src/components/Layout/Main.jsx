/* eslint-disable */
import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Main = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            {navigation.state === "loading" && <Loading></Loading>}
            <Outlet></Outlet>
        </div>
    );
};

export default Main;