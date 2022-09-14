//import Cards from "components/Cards.jsx";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getAllRecipes,
  filterRecipesByHealthScores,
  filterByCreatedAt,
  orderByName,
} from "../redux/actions";
import { Link } from "react-router-dom";
import PaginationII from "./pagination/PaginationII";
import CardsII from "./card/CardsII.js";
import Loader from "./loader/Loader";
import css from "./FilterSelect/style.module.css";
import Button from '../components/Button'
import SelectComponent from "../components/Select"
import Modal from "./Modal/Modal";
import { UseModal } from "hooks/useModal/useModal";
function Home() {
  const [load, setLoad] = useState(false);
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipeForPage, setRecipeForPage] = useState(6);
  const indexOfLastRecipe = currentPage * recipeForPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipeForPage;
  const [orden, setOrder] = useState("");
  const [ isOpen, closeModal, openModal] = UseModal(true)
  //console.log(allRecipes);
  const currentRecipes = allRecipes?.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );
 
  
  useEffect(() => {
    setLoad(true);

    dispatch(getAllRecipes());
    setLoad(false);
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    setLoad(true);

    dispatch(getAllRecipes());
    setLoad(false);
  }

  const pagine = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const habdleFilterByScore = ({value}) => {
    dispatch(filterRecipesByHealthScores(value));
  };
  const handleFilterCreated = ({value}) => {
    dispatch(filterByCreatedAt(value));
  };
  const handleFilterOrderName = ({value})=>{
    
    dispatch(orderByName(value));
    setCurrentPage(1);
    setOrder(`${orden}order`)
    console.log(value)

  }

  return (
    <div>
      {load || !allRecipes.length ? (
        <Loader />
      ) : (
        <>
          <div>
          
            <div className={css.container}>
           
              <div className={css.selectLefth}> 
                <Button name={'All Recipes'} dispatch={dispatch} getAllRecipes={getAllRecipes} setLoad={setLoad}/>
              </div>
              <SelectComponent  placeholder='order..'   handleChange={handleFilterOrderName}  options={[
                
                {value: 'asc' , label:'A - Z..'},
                {value: 'desc' , label:'Z - A'}
              ]} />
              <SelectComponent placeholder={'filterScore'}  handleChange= {habdleFilterByScore}  options={[
                {value: 'All' , label:'All'},
                {value: '76' , label:'76'},
                {value: '56' , label:'Score 56'},
                {value: '100' , label:'Score 100'},
                {value: '96' , label:'Score 96'},
              ]} />
               <div className = {css.selectRigth}>
              <SelectComponent placeholder={'Filter origen'}  handleChange= {handleFilterCreated}  options={[
                {value: 'Api' , label:'API'},
                {value: 'created' , label:'CREATED'}
                ]}/>
              </div>
            </div>
            <div className="pagi">
            
              <PaginationII
                recipeForPage={recipeForPage}
                allRecipes={allRecipes.length}
                pagine={pagine}
              />
            </div>
          </div>
          <div className="containerCard">
            {currentRecipes &&
              currentRecipes.map((recipe) => (
                <Link to={`${recipe.id}`}>
                
                  <CardsII
                    name={recipe.name}
                    image={recipe.image}
                    diets={recipe?.diets}
                    key={recipe.key}
                  />
                
                </Link>
                
              ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;

/**
 * 
 * {currentRecipes &&
          currentRecipes.map((recipe)=> {
            return(
              <div className='containerCard'>
            <Link to={`${recipe.id}`}>
              <CardsII
                name={recipe.name}
                image={recipe.image}
                diets={recipe?.diets}
                key={recipe.key}
              />
            </Link>
          </div>
            )
          })
          
        }
 * / */
