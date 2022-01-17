import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';

import { getAllRecipes } from 'redux/actions.js';

import Card from 'components/Card.jsx'


function Cards() {

    // React.useEffect(() => {
    //     dispatch(getHouse(props.match.params.houseId));
    // }, [dispatch, props.match.params.houseId]);

    const dispatch = useDispatch();
    dispatch(getAllRecipes());

    const recipes = useSelector(state => state.recipes);

    return (
        <div className="cardsContainer">
            {/* Nuestro estado global en redux es un arreglo de objetos */}
            {recipes.map((card) => { /* cada "card" es un objeto. Tenemos 100 en total */
                return <Card key={card.id} {...card} />
            }
            )}
        </div>
    )
}

export default Cards;
