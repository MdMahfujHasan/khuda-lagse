/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

const Foods = ({ food, handleAddToCart }) => {
    const { idMeal, strMeal, strArea, strMealThumb } = food;
    return (
        <div className='border border-rose-300 hover:border-rose-500 rounded p-4'>
            <img className='w-56 h-56 rounded' src={strMealThumb} alt="Meal image" />
            <p><small><b>ID:</b> {idMeal}</small></p>
            <h2 className='text-2xl font-semibold'>{strMeal}</h2>
            <h3 className='text-lg font-semibold'>Price: ${(Math.random() * 100).toFixed(2)}</h3>
            <p>#{strArea}</p>
            <button className='border-2 bg-rose-500 hover:bg-rose-600 px-2 py-1 text-white font-semibold' onClick={() => handleAddToCart(food)}>Add to Cart</button>
            <Link to={`/meal/${idMeal}`}><button className='border-2 bg-rose-500 hover:bg-rose-600 px-2 py-1 text-white font-semibold'>See Details</button></Link>
        </div>
    );
};

export default Foods;