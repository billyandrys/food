import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getAllRecipes } from 'redux/actions.js';

import Card from 'components/Card.jsx'


function Cards() {

    const dispatch = useDispatch();

    dispatch(getAllRecipes());

    const recipes = useSelector(state => state.recipes);

    return (
        <div className="cardsContainer">
            {recipes.map((card, index) => {
                return <Card key={index} {...card} />
            }
            )}
        </div>
    )
}

export default Cards;
