


import React from 'react';
import './style.css'

const PaginationII = ({recipeForPage, allRecipes, pagine}) => {
    const pageNumber = [] // not inmutable 

    for (let index = 1; index <= Math.ceil(allRecipes / recipeForPage ); index++) {
        pageNumber.push(index);
        
    }
    return (
        <nav className='containerPagine'>
            <ul className='pagination'>
                {pageNumber &&
                 pageNumber.map(number=>(
                    <il key={number}>
                        <a onClick={()=>pagine(number)}> {number}</a>
                    </il>
               
                )) 
                }

                
            </ul>
        </nav>
    );
}

export default PaginationII;
