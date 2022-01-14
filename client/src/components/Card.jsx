import React from "react";

function Card(props) {
    return (
        <div> {/* <React.Fragment> */}
            <img src={props.image} alt="props.title" className="cardImage" />
            <h2>{props.title}</h2>
            <ul>
                {/* {props.dietTypes.map((item, key) => { // []
                    return <li key={key}>{item}</li>;
                })} */}
                {props.diets.join(", ") /* [tipo1, tipo2, tipo3] => "tipo1, tipo2, tipo3" */} 
            </ul>
        </div>
    )
}

export default Card;
