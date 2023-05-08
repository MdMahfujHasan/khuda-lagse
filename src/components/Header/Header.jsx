/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import './Header.css';

const Header = () => {
    return (
        <nav className='mt-2 mb-8 flex justify-center'>
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/about">About</ActiveLink>
            <ActiveLink to="/contact">Contact</ActiveLink>
        </nav>
    );
};

export default Header;