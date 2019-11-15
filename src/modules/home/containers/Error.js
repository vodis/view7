import React from 'react';
import LeftSidebars from '../../../components/Layout/LeftSidebars';
import { Link } from 'react-router-dom';

const Error = () => (
    <>
        <LeftSidebars />
        <h1>404</h1>
        <Link to="/" >Home</Link>
        <Link to="/user" >User</Link>
    </>
);

export default Error;