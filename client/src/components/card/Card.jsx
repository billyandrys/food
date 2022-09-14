import React from "react";
import './style.css'

function Card({recipes, pagine, forPagine}) {
    console.log(recipes);
    return (
        <div className="container"> 
        <div className="containerPoke">
            {
            recipes
            .slice((pagine - 1 ) * forPagine, (pagine - 1) * forPagine + forPagine )
            .map((recipe, i)=>(
                <div className="pokeContainer" key={i}>
                    <h2>{recipe.name}</h2>
                    <img src={recipe.image} alt="props.title" className="imgContainer" />
                    <ul>
                    { recipe.diets.map((item, key) => { // []
                    return <li key={key}>{item}</li>;
                })}
                    </ul>

                </div>
            ))
            }
            </div>
        </div>
    )
}

export default Card;
