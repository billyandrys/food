// import SearchBar from 'components/SearchBar.jsx';
import logo from "assets/logo.png";
import { Link } from "react-router-dom";
import css from '../style/navbar.module.css'
import Searchbar from "./Searchbar";
import Modals from "./Modal/Modals";

function Navbar() {

  return (
    <header>
      <Link to="/" className={css.logo}>
        <img src={logo} alt="logo" />
      </Link>
      <nav>
        <ul className={css.nav__links}>
        <li>
          <Searchbar />
          </li>
        
          
          <li>
          
            <Modals/>
            
          </li>
          
        </ul>
        
        
      </nav>
    </header>
  );
}

export default Navbar;

/* <Link to="create">Create a new recipe</Link>*/ 