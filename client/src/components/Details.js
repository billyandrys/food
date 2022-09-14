import React, { useEffect } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { getDetail } from '../redux/actions'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Modal from './Modal/Modal';
import { UseModal } from 'hooks/useModal/useModal';
import css from './style.module.css'


const Details = (props) => {
    const [ isOpen, closeModal, openModal] = UseModal(true)
    const { id } = useParams()
    console.log(id)
    const dispatch = useDispatch()
    
    const recipeById = useSelector(({detail})=>detail)
    console.log(recipeById)
    const history = useNavigate()
    
    useEffect(()=>{
               
                dispatch(getDetail(id))
               
    },[dispatch, id ])

    return (
        
        
        <div className={css.container}>
        <Link  className={css.home} to='/home'>Home</Link>
            <div className={css.detail}>
            
                        { id === 'undefined' ? <h1>not created</h1> : recipeById.title? <h1>{recipeById.title }</h1> : <h1>{recipeById.name}</h1> }
             </div>
            </div>
       
    );
}

export default Details;
