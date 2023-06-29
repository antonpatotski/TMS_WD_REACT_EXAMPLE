import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import MenuButton from "./menuButton/menuButton";
import UserProfile from "./userProfile/userProfile";
import './menu.scss';
import {ROUTES} from "../../constants/routes";
import {useCallback} from "react";

const Menu = ({ user }) => {
  const navigate = useNavigate();
  const goToSignUp = useCallback(() => {
    navigate(ROUTES.signUp);
  }, []);

  return (
    <div className="menu">
      <MenuButton />
      <NavLink style={{ color: '#ffffff' }} to={ROUTES.signUp}>Go to sign up</NavLink>
      <button onClick={goToSignUp}>Go to sign up</button>
      <UserProfile user={user} />
    </div>
  )
};
//
// const NavLink1 = ({ to, children }) => {
//   return (
//     <a href={to}>{ children }</a>
//   )
// }

export default Menu;
