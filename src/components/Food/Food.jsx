/* eslint-disable */
import React from 'react';

const Food = ({ food }) => {
    const { strMeal, strArea, strMealThumb, strInstructions } = food;
    return (
        <div>
            <img className='w-36 h-36' src={strMealThumb} alt="" />
            <h2>{strMeal}</h2>
            <p>#{strArea}</p>
            <p>Instructions: {strInstructions}</p>
        </div>
    );
};

export default Food;