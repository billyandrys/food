// import SearchBar from 'components/SearchBar.jsx';
import logo from 'assets/logo.png';

function Navbar() {
    return (
        <nav className="navbar"
            style={{
                backgroundColor: '#f2f2f2',
                borderBottom: '1px solid #e6e6e6',
            }}>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="navbar-links">
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Create a new recipe</a>
                        </li>
                    </ul>
                </div>
                {/* <SearchBar /> */}
            </div>
        </nav>
    )

}

export default Navbar;