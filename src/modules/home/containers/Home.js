import React from 'react';
import LeftSidebars from '../../../components/Layout/LeftSidebars';
import Slider from '../components/Slider/Slider';
import { Link } from 'react-router-dom';

const Home = (props) => (
    <div className="container">
        <LeftSidebars />
        <Slider />
        <Link to="/" >Home</Link>
        <Link to="/user" >User</Link>
    </div>
);

export default Home;