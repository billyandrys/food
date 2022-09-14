
import React from 'react';
import './styleII.css'
import css from '../../style/cards.module.css'

const CardsII = ( { name, image, diets }) => {


    
    return (
        <>
        
            <div className={css.card}>
            
            <h3 className='heading__title'>{name}</h3>
            
            <div >
            <img src={image} alt={image} width='180px' height='150px'/>
                <ul >
                    {diets?.map((diet, index) =>{
                        return (
                            <li key={index}>{diet}</li>
                        )
                    })}
                </ul>
            </div>  
            </div>
       
        </>
    )
    
}

export default CardsII;
