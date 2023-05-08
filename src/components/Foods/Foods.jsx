/* eslint-disable */
import React from 'react';

const Foods = ({ food, handleAddToCart }) => {
    const { idMeal, strMeal, strArea, strMealThumb } = food;
    return (
        <div>
            <img className='w-56 h-56' src={strMealThumb} alt="Meal image" />
            <p><small>{idMeal}</small></p>
            <h2 className='text-3xl font-semibold'>{strMeal}</h2>
            <h3 className='text-lg font-semibold'>Price: ${(Math.random() * 100).toFixed(2)}</h3>
            <p>#{strArea}</p>
            <button onClick={() => handleAddToCart(food)}>Add to Cart</button>
        </div>
    );
};

export default Foods;