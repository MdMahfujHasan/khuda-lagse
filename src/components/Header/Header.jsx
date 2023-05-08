/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='mt-2 mb-8 flex justify-center'>
            <Link className='mr-6 text-lg bg-rose-400 hover hover:font-medium px-4 text-white' to="/">Home</Link>
            <Link className='mr-6 text-lg bg-rose-400 hover hover:font-medium px-4 text-white' to="/about">About</Link>
            <Link className='mr-6 text-lg bg-rose-400 hover hover:font-medium px-4 text-white' to="/contact">Contact</Link>
            <Link to={`/`}></Link>
        </nav>
    );
};

export default Header;