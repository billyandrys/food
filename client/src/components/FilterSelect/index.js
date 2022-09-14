import React from 'react';
import css from './style.module.css'


const Index = ({handleClick , handleOrder, habdleFilterByScore, handleFilterCreated}) => {
    return (
        <div className={css.container}>
        <button onClick = {handleClick} className={css.selectLefth } type="button" >Clear Filter</button>
        <select onChange={handleOrder}>
          <option  value="asc">Upward</option>
          <option value="desc">Downward</option>
        </select>
        <select onChange = {habdleFilterByScore} >
          <option   value="All">All</option>
          <option value="76">score 76</option>
          <option value="56">score 76</option>
          <option value="100">score 76</option>

          <option value="96">score 76</option>
        </select>
        <select onChange={handleFilterCreated} className={css.selectRigth}>
          <option value="Api">Api</option>
          <option value="created">Created</option>
        </select>
            
        </div>
    );
}

export default Index;
