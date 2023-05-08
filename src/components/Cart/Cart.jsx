/* eslint-disable */
import React from 'react';
import Food from '../Food/Food';

const Cart = ({ cart }) => {
    return (
        <div className='h-1/6 overflow-y-scroll'>
            {
                cart.map(food => <Food
                    key={food.idMeal}
                    food={food}
                ></Food>)
            }
        </div>
    );
};

export default Cart;