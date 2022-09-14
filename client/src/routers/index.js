import React from "react";
import { Route,  Routes } from "react-router-dom";
import App from  '../App'
import Home from "components/Home";
import SearchRecipeName from "components/search/SearchRecipeName";
import FormCreate  from "components/createRecipe/formCreate" 
import Details from "components/Details";
import Layout from "components/Layout";

const Routers = ()=>{
    return(
        <Routes>

            <Route path="/" element={<App/>} exact />
            <Route path="home" element={<Layout/>} exact >
                <Route index element={<Home />} exact />
                <Route path="search" element={<SearchRecipeName/>} exact/>
                <Route path="create" element={<FormCreate/>} />
            </Route>
            <Route path="/home/:id" element={<Details/>} />
        
    </Routes>
    
    )
}

export default Routers