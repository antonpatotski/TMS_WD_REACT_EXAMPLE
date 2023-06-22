import { useState } from "react";

import { ReactComponent as BurgerIcon } from '../../../assets/svg/burgerIcon.svg';
import { ReactComponent as CrossIcon } from '../../../assets/svg/cross.svg';

import './menuButton.scss'


const MenuButton = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <button onClick={() => setIsSelected(!isSelected)} className="menuButton btn-custom">
      {isSelected ? <CrossIcon/> : <BurgerIcon/>}
    </button>
  );
}
export default MenuButton
