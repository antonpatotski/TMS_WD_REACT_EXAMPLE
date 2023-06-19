import { ReactComponent as BurgerIcon } from '../../../assets/svg/burgerIcon.svg';
import './menuButton.scss';

const MenuButton = () => {
  const func = () => {
    console.log(222)
  }
  return (
    <button onClick={func} className="menuButton btn-custom">
      <BurgerIcon />
    </button>
  )
}

export default MenuButton;
