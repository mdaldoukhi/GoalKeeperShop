import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar, Logo, NavProduct } from '../styles'
/* Images */
import DarkLogo from '../DarkLogo.png'
import LightLogo from '../LightLogo.png'

const Navbar = (props) => {
  return (
    <NavBar className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Logo className="navbar-brand" to='/'><img alt={"Logo"} src={props.currentMode === "dark"
          ? DarkLogo
          : LightLogo} /></Logo>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavProduct to="/products" className="nav-link">
                PRODUCT
              </NavProduct>
            </li>
            <li className="nav-item">
              <NavProduct to="/Brands" className="nav-link">
                BRANDS
              </NavProduct>
            </li>
            <li className="nav-item">
              <NavProduct to="/portfolio" className="nav-link">
                PORTFOLIO
              </NavProduct>
            </li>
            <li className="nav-item">
              <NavProduct to="/contact" className="nav-link">
                CONTACT US
              </NavProduct>
            </li>
          </ul>
        </div>
      </div>
    </NavBar>
  );
};

export default Navbar;
