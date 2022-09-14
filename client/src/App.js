import css from './App.module.css';
import style from './style.module.css'
import { Link } from 'react-router-dom'


function App() {
  
  return (
      <div className={css.container}>
      <div>
          <h1 className={style.sms}>Search Your Recipes</h1>
      <Link to="/home" >Home</Link>
      </div>
      
      </div>
  );
}

export default App;
