/* eslint-disable */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FoodDetails = () => {
    const foodDetails = useLoaderData();
    const { strMeal, strArea, strCategory, strMealThumb, strInstructions, strYoutube, strSource } = foodDetails.meals[0];
    return (
        <div>
            <img className='h-48 w-48' src={strMealThumb} alt="Meal image" />
            <h2 className='text-xl font-bold'>{strMeal}</h2>
            <p><small>#{strArea} #{strCategory}</small></p>
            <p><b>Instruction:</b> {strInstructions}</p>
            <p>
                <small>
                    <a className='underline text-rose-600 mr-1' href={strYoutube}>Youtube</a>
                    <a className='underline text-sky-600' href={strSource}>Source</a>
                </small>
            </p>
        </div>
    );
};

export default FoodDetails;