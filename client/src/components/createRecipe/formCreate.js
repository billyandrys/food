

import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTypeDiets, postRecipes, getAllRecipes } from 'redux/actions';
import { Link, useNavigate } from 'react-router-dom';
import  useForm from '../../hooks/useForm'
import css from './style.module.css'
import Loader  from '../loader/Loader'
import Modal from 'components/Modal/Modal';
import { UseModal } from '../../hooks/useModal/useModal'


const initialForm = {
        name:'',
        summary:'',
        healthScore:'',
        analyzedInstructions:'',
        image:'',
        typeDiets:[]
}

const validateForm = (form)=>{
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    //let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;
    let regexScore = /^\d*\.\d+$/
    
    let errors = {}
    if(!form.name.trim()){ 
        errors.name = 'required is fiels'
    }else if(!regexName.test(form.name.trim())){
        errors.name = 'fielf only letter and blanck spaces'
    }

    if (!form.summary.trim()){
        errors.summary = 'required is fiels'
    }else if(!regexComments.test(form.summary.trim())){
        errors.summary = 'fielf maximo 1255 caracters'
    }
    if (!form.healthScore.trim()){
        errors.healthScore = 'fiels is required'
    }else if(!regexScore.test(form.healthScore)){
        errors.healthScore = 'only number de 10 in 100'
    }
    
    if(!form.analyzedInstructions.trim()){
        errors.analyzedInstructions = 'fiels is requiered'
    }else if (!regexComments.test(form.analyzedInstructions)){
        errors.analyzedInsructions = 'maximo 1255 caracters'
    }
    if(!form.image.trim()){
        errors.image = 'link imagen is required'
    }
    return errors


}


const FormCreate = () => {
    const dispatch = useDispatch()
    const history = useNavigate()
    const typeDiests = useSelector(({typeDiests})=>typeDiests)
    const [isOpenModal, closeOpenModal]  = UseModal(true)
    
    const {
        form,
        errors,
        loading,
        setLoading, 
        reposnse, 
        handleChange,
        handleBlur,
        handleSubmit,
        setForm 

    } = useForm(initialForm, validateForm)
    console.log(form.name)

    
    useEffect(()=>{
        dispatch(getTypeDiets())
    }, [dispatch])



      const handleSelect = (e)=>{
        setForm({
            ...form,
            typeDiets :  [...new Set ([...form.typeDiets, e.target.value])]
        })
    }

    const save = (e)=>{
        e.preventDefault();
       if(handleSubmit()){
            setForm({
                ...form,
                name : '',
                summary:'',
                healthScore:'',
                analyzedInstructions:'',
                image:'',
                typeDiets:[]
            })
            dispatch(getAllRecipes())
            
        }
    }
    
    const handleDelete = (typeDiestDelete)=>{
        
        setForm({
            ...form,
            typeDiets: form.typeDiets.filter(typeDiets=>typeDiets !== typeDiestDelete )
        })
        
    }
    return (
        /*<Modal isOpen={isOpenModal} closeOpenModal={closeOpenModal}>*/
        <>
        <Link to={'/home'}>Home</Link>
         { loading ? <Loader/>:(
            
        
        <form className={css.formCreate} onSubmit={(e)=>save(e)}>
            
            <h1>Create your recipe</h1>
            {console.log(form)}
            
            <input type='' name='name' value={form.name} onChange={handleChange} onBlur={handleBlur} placeholder='name'/>
            <span>{errors.name} </span>
            
            <input type='' name='summary' value={form.summary} onChange={handleChange} onBlur={handleBlur} placeholder='summary'/>
            <span>{errors.summary}</span>
            
            <input type='' name='healthScore' value={form.healthScore} onChange={handleChange} onBlur={handleBlur} placeholder='healthScore'/>
             <span>{errors.healthScore }</span>   
            
            <input type='' name='analyzedInstructions' value={form.analyzedInstructions} onChange={handleChange} placeholder='Instructions'/>
            <span>{errors.analyzedInstructions }</span>
            <input type='' name='image' value={form.image} onChange={handleChange} onBlur={handleBlur} placeholder='image'/>
            <span>{errors.image}</span>
            
            <select onChange={handleSelect}>
            <option value="" selected='true'  disabled="disabled">Choose Types Diets</option>
                {
                    typeDiests.map(({name})=><option value={name}>{name}</option>)
                
                }
            </select>
            <button  type='submit' >Create Recipe</button>
            {form.typeDiets.map(typeDiet=> 
        <div className= {css.typeDiests}>
            <ul >
                <ol>
                <button onClick={()=>handleDelete(typeDiet)}>X{typeDiet} </button>
                </ol>
            </ul>
        </div>
        )}
        </form>

        )}

        </>
       /* </Modal>*/
    )
    
}
export default FormCreate;

/**
 * "name" : "Alitas de pollo",
	"summary":"Leon Bruno",
	"healthScore":"4.76",
	"analyzedInstructions":"015-05-18",	"image":"https://st4.depositphotos.com/12985656/21084/i/450/depositphotos_210840492-stock-photo-elevated-view-cut-red-ripe.jpg",
	"typeDiet":"vegan"


    <select >
                {
                    typeDiests.map(({name})=><option value={name}>{name}</option>)
                
                }
            </select>
            <labe>image</labe>
            <input type='' name='image' value={input.image} onChange={handleChange} />
            <ul>
                <li>{input.typeDiets.map(typeDiet=>`${typeDiet} ,` )}</li>
            </ul>


    
 * 
 * 
 * 
 * / */