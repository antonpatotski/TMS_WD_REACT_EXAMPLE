import MenuButton from "./menuButton/menuButton";
import UserProfile from "./userProfile/userProfile";
import './menu.scss';

const Menu = ({ user }) => (
  <div className="menu">
    <MenuButton />
    <UserProfile user={user} />
  </div>
)

export default Menu;
