import { useState } from "react";

import RoutesComponent from "./routes";
import Menu from "./components/menu/menu";
import { ThemeContext } from "./context/theme";
import { THEME } from "./components/themeToggle/themeToggler";

import './App.scss';
import usePosts from "./hooks/usePosts";

const user = {
  firstName: 'Antonio',
  lastName: 'Front-endas'
}

function App() {
  const [ theme, setTheme ] = useState(THEME.light);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <div className={`App App--${theme}`}>
        <Menu user={user} />

        <div className="App__body">
          <RoutesComponent />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
