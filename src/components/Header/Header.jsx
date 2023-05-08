/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='mt-2 mb-8 flex justify-center'>
            <Link className='mr-4 text-lg bg-slate-500 hover:bg-slate-600 px-3 text-white' to="/">Home</Link>
            <Link className='mr-4 text-lg bg-slate-500 hover:bg-slate-600 px-3 text-white' to="/foods">Foods</Link>
            <Link className='mr-4 text-lg bg-slate-500 hover:bg-slate-600 px-3 text-white' to="/about">About</Link>
            <Link className='mr-4 text-lg bg-slate-500 hover:bg-slate-600 px-3 text-white' to="/contact">Contact</Link>
        </nav>
    );
};

export default Header;