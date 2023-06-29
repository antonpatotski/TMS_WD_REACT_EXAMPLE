import {useContext, useMemo} from "react";

import { ThemeContext } from "../../context/theme";

import './themeToogler.scss';

export const THEME = {
  light: 'light',
  dark: 'dark'
}

const ThemeToggle = () => {
  const [ theme, setTheme ] = useContext(ThemeContext);
  const isLightTheme = useMemo(() => {
    return theme === THEME.light;
  }, [ theme ])

  return (
    <button
      className={`theme-toggle theme-toggle--${theme}`}
      onClick={() => setTheme(isLightTheme ? THEME.dark : THEME.light)}
    >
      { isLightTheme ? 'Set theme to dark' : 'Set theme to light' }
    </button>
  )
}

export default ThemeToggle;
