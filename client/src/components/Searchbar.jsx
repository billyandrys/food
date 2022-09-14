import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getNameRecipes } from 'redux/actions';
import css from '../style/search.module.css'
import Error from './Errror'
import Loader from './loader/Loader'


export default function Searchbar() {

    const [errorHandle, setErrorHandle] = useState({
        hasError : false,
        message : "",
      })
      const  [ load, setLoad ] = useState(false)

    const [name, setName] = useState('');
    const [enabled, setEnabled] = useState(true)

    const dispatch = useDispatch() 
    const handleInputChange = (e)=>{
        e.preventDefault();
        setName(e.target.value)
        console.log(name)
    }
    const handelSubmit = (e)=>{ 
        e.preventDefault();
        setLoad(true)
        dispatch(getNameRecipes(name, setErrorHandle)) 
        setLoad(false)
       
       
        
    }
    return (
        <>
        <Error errorHandle={errorHandle} setErrorHandle={setErrorHandle}/>
            {load ?  <Loader />
                
            : (
                <div className={css.box}>
                    <form onSubmit={handelSubmit}> 
                        <input className={css.input} type="text" placeholder="recipes..." onChange={handleInputChange} value={name}/>
                        <button  className={css.submit} type='submit' onClick={handelSubmit} disabled={errorHandle.hasError}>Search</button>
                    </form>
                </div>
            )
                
            }
        </>
    )
}
