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

const Menu = () => {
  const location = useLocation();
  const isPostsPage = useMemo(
    () => location.pathname.includes(ROUTES.posts),
    [ location.pathname ]
  );

  return (
    <div className="menu">
     <div className="menu__body">
       <MenuButton />
       <div className="menu__right">
         { isPostsPage && <MenuSearch /> }
         <UserProfile />
       </div>
     </div>
    </div>
  )
};

export default Menu;
