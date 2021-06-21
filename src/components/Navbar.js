import "bootstrap/dist/css/bootstrap.min.css";
import {Logo, NavProduct} from '../styles'
/* Images */
import DarkLogo from '../DarkLogo.png'
import LightLogo from '../LightLogo.png'

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Logo className="navbar-brand" to='/'><img alt={"Logo"}src={props.currentMode === "dark"
      ? DarkLogo
      : LightLogo} /></Logo>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavProduct to="/products" className="nav-link">
              Products
              </NavProduct>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
