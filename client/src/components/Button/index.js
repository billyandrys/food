import React from 'react'

export default function index({name, dispatch, getAllRecipes, setLoad  }) { 

const handleClick = (e)=>{
    setLoad(true)
    e.preventDefault()
    dispatch(getAllRecipes())
    setLoad(false)
}
 return (
    
    <button onClick={handleClick}>{name}</button>

  )
}
