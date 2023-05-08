/* eslint-disable */
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Foods from '../Foods/Foods';
import Cart from '../Cart/Cart';
import './Home.css';

const Home = () => {
    const foods = useLoaderData();

    const [cart, setCart] = useState([]);

    const handleAddToCart = food => {
        const newCart = [...cart, food];
        setCart(newCart);
    }
    return (
        <div className='home-container'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-4'>
                {
                    foods.meals.map(food => <Foods
                        key={food.idMeal}
                        food={food}
                        handleAddToCart={handleAddToCart}
                    ></Foods>)
                }
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;