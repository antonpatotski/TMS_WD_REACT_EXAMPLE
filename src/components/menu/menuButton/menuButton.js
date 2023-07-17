import { useState } from "react";

import { ReactComponent as BurgerIcon } from '../../../assets/svg/burgerIcon.svg';
import { ReactComponent as CrossIcon } from '../../../assets/svg/cross.svg';

import './menuButton.scss'
import MenuNavigation from "../menuNavigation/menuNavigation";


const MenuButton = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <button onClick={() => setShowMenu(!showMenu)} className="menuButton btn-custom">
        {showMenu ? <CrossIcon/> : <BurgerIcon/>}
      </button>

      <MenuNavigation show={showMenu} />
    </>
  );
}
export default MenuButton
