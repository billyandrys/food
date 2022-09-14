import {useState, useEffect} from 'react'
import { useLocation, useSearchParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { search } from '../../redux/actions'
import Search from './Search' 

const SearchRecipeName= ()=>{
    //const location = useLocation()
    //const name = querystring.parse(location.search) || ''
    const[searchName, setSearchName] = useSearchParams()
    //searchName({name:name})
    const dispatch = useDispatch()
    
    const name =  searchName.get('name') || ''
    console.log(name)
    useEffect(()=>{
        
        dispatch(search(name))
    }, [dispatch, name])

        let state = useSelector(state=>state.searchRecipe)
        console.log(state)
        
          return(  
            <>
            <Link to='/home'>Home</Link>
            
                <div>
                <p> Results</p>
                <ul>
                {state ? state.map(e=><ol key={e.id}>{e.title}</ol>):<p>'not fount result'</p>}
                </ul>
                    
                </div>
            </>
        )
}

export default SearchRecipeName