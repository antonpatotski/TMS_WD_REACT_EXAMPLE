import { useState } from "react";

import RoutesComponent from "./routes";
import Menu from "./components/menu/menu";
import { ThemeContext } from "./context/theme";
import { PostsContext } from "./context/posts";
import { THEME } from "./components/themeToggle/themeToggler";

import './App.scss';
import usePosts from "./hooks/usePosts";

const formDefaultValues = {
  name: { key: 'name', value: 'test1', label: 'Name' },
  msg: { key: 'msg', value: 'test1', label: 'Message' },
}

const user = {
  firstName: 'Antonio',
  lastName: 'Front-endas'
}

function App() {
  const { posts } = usePosts();
  const [ theme, setTheme ] = useState(THEME.light);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <div className={`App App--${theme}`}>
        <Menu user={user} />

        <PostsContext.Provider value={{ posts }}>
          <RoutesComponent />
        </PostsContext.Provider>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
