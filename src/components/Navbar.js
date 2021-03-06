import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar, Logo, NavProduct, SignoutButton } from '../styles'
/* Images */
import DarkLogo from '../DarkLogo.png'
import LightLogo from '../LightLogo.png'

import SignupBtn from "../components/Buttons/SignupBtn"
import SigninBtn from "./Buttons/SigninBtn";

import authStore from "../stores/authStore"
import { observer } from 'mobx-react'

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
              <NavProduct to="/vendors" className="nav-link">
                Vendors
              </NavProduct>
            </li>
            {authStore.user ? <h4>{authStore.user.username} <SignoutButton onClick={authStore.signout} /> </h4> :
              <>
                <li className="nav-item">
                  <SignupBtn />
                </li>
                <li className="nav-item">
                  <SigninBtn />
                </li>
              </>
            }

          </ul>
        </div>
      </div>
    </NavBar>
  );
};

export default observer(Navbar);
