import {NavLink} from "react-router-dom";
import {ROUTES} from "../../../constants/routes";

import './menuNavigation.scss';

const MenuNavigation = ({ show }) => {
  return (
    <div className={`menu-navigation__container ${show ? 'menu-navigation__container--shown' : ''}`}>
      <div>
        <div>User Profile</div>
        <NavLink to={ROUTES.main}>Home</NavLink>
        <NavLink to={ROUTES.signUp}>Sign up</NavLink>
      </div>

      <div>
        <NavLink to={ROUTES.logOut}>Log out</NavLink>
      </div>
    </div>
  )
}

export default MenuNavigation;
