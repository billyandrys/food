import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { postRecipes } from '../redux/actions'
const UseForm = (intialForm, validateForm)=>{
    const [form, setForm] = useState(intialForm)
    const [errors, setErrors] = useState({})
    const [laoding, setLoading] = useState(false)
    const [response, setResponse] = useState(null)
    const dispatch = useDispatch()
    const handleChange = (e)=>{
        const {name, value} = e.target
        setForm({
            ...form,
            [name]:value
        })
    }

    const handleBlur = (e)=>{
        handleChange(e)
        
        setErrors(validateForm(form))
    }

    const handleSubmit = ()=>{
        
        setLoading(true)
        if(Object.keys(errors).length===0){
            dispatch(postRecipes(form))
            setLoading(false)
            return true
            
           
        }
       
    }

    

    return {
        form,
        errors,
        laoding,
        setLoading,
        response, 
        handleChange,
        handleBlur,
        setForm,
        handleSubmit
        
    }
}
export default UseForm