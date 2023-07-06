import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import MenuButton from "./menuButton/menuButton";
import UserProfile from "./userProfile/userProfile";
import './menu.scss';
import MenuSearch from "./menuSearch/menuSearch";
import { useMemo } from "react";
import {useLocation} from "react-router";
import {ROUTES} from "../../constants/routes";
// import {ROUTES} from "../../constants/routes";
import {useCallback} from "react";

const Menu = ({ user }) => {
  const navigate = useNavigate();
  const goToSignUp = useCallback(() => {
    navigate(ROUTES.signUp);
  }, []);
  const location = useLocation();
  const isPostsPage = useMemo(
    () => location.pathname.includes(ROUTES.posts),
    [ location.pathname ]
  );

  return (
    <div className="menu">
      <MenuButton />
      {/*<NavLink style={{ color: '#ffffff' }} to={ROUTES.signUp}>Go to sign up</NavLink>*/}
      {/*<button onClick={goToSignUp}>Go to sign up</button>*/}
      <div className="menu__right">
        { isPostsPage && <MenuSearch /> }
        <UserProfile user={user} />
      </div>
    </div>
  )
};

export default Menu;
