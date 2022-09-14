import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';
import Pagination from './pagination/Pagination';
import { getAllRecipes } from 'redux/actions.js';

import Card from 'components/card/Card.jsx'
import { useState , useEffect} from 'react'

function Cards() {

    // React.useEffect(() => {
    //     dispatch(getHouse(props.match.params.houseId));
    // }, [dispatch, props.match.params.houseId]);
    

    const [pagine, setPagine] = useState(1)
    const [forPagine, setForPagine] = useState(6)
    
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllRecipes());
        
    }, [dispatch]);


    const recipes = useSelector(state => state.recipes);
    
    //TOTAL  RECIPE DIV NUMBER PAGINATION  100 / 10 
    const max =  recipes.length / forPagine
    console.log(parseInt(max))
    return (
        <div className="cardsContainer">
            {/* Nuestro estado global en redux es un arreglo de objetos */}
            {/*recipes.map((card) => { /* cada "card" es un objeto. Tenemos 100 en total 
                return <Card pagine={pagine} forPagine={forPagine} key={card.id} {...card} />
            }
            )*/}
            <Card pagine={pagine} forPagine={forPagine}  recipes={recipes} />
            <Pagination pagine={pagine} setPagine={setPagine} max={max}/>
            
        </div>
    )
}

export default Cards;
