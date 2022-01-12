import React from "react";

function Card(props) {
    return (
        <div> {/* <React.Fragment> */}
            <img src={props.img} alt="props.name" className="cardImage" />
            <h2>{props.name}</h2>
            <ul>
                {/* {props.dietTypes.map((item, key) => { // []
                    return <li key={key}>{item}</li>;
                })} */}
                {props.dietTypes.join(", ") /* [] => "tipo1, tipo2, tipo3" */} 
            </ul>
        </div>
    )
}

export default Card;