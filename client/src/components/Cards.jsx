import React from 'react';
import redux from 'redux';
import { useSelector } from 'react-redux';

import Card from 'components/Card.jsx'

function Cards() {

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