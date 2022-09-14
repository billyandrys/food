import {useState} from 'react'
import  {useNavigate, useSearchParams}  from 'react-router-dom';
import UseForm from 'hooks/useForm';
import './style.css'




  const initialForm = {
        name:''
    }

    const validateForm = (form)=>{
        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/

        let errors = {}

        if(!form.name.trim()){
            errors.name = 'required is fielf'
        }else if (!regexName.test(form.name.trim())){
            errors.name = 'fielf only letter and blank space'
        }
        return errors
    }




export default function Search (){

const [seachParams , setSearchParams] = useSearchParams()

    const searchTerm =  seachParams.get('name') || ''

    const { form,
        errors,
        laoding,
        response, 
        handleChange,
        handleBlur
        } = UseForm(initialForm, validateForm);

        const navigate = useNavigate()

        const handleSubmit =(e)=>{
            e.preventDefault()
            if(!Object.keys(errors).length && form.name !== 0){
                    navigate(`search?name=${form.name}`)
            }else{
                console.log('1')
            }
        }

 
    return(
        <>
            <div>
                <form onSubmit={handleSubmit}>
                <input
                     className='inputSearch'
                        type="text"
                         name="name"
                         placeholder='seach for world'
                         value={form.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required/>
                          {errors.name && <p>{errors.name}</p>}
                <input  type="submit" >Search</input>

                </form>
            </div>
        </>
    )
}