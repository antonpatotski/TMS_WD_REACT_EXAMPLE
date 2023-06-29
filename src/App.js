import {useEffect, useState} from "react";

import RoutesComponent from "./routes";
import Menu from "./components/menu/menu";
import SignUp from "./pages/signUp/signUp";
import Posts from "./components/posts/posts";
import { ThemeContext } from "./context/theme";
import ThemeToggle, { THEME } from "./components/themeToggle/themeToggler";

import './App.scss';
import HoverIncrease from "./lessonTestComponents/hoverIncrease/hoverIncrease";

const formDefaultValues = {
  name: { key: 'name', value: 'test1', label: 'Name' },
  msg: { key: 'msg', value: 'test1', label: 'Message' },
}

const user = {
  firstName: 'Antonio',
  lastName: 'Front-endas'
}

function App() {
  const [ posts, setPosts ] = useState([]);
  const [ theme, setTheme ] = useState(THEME.light);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const urlParams = new URLSearchParams({
          limit: 10, // count of elements on page
          offset: 1, // page number
        });// limit=10&offset=1
        const { results: postsResponse } = await fetch('https://studapi.teachmeskills.by/blog/posts?' + urlParams)
          .then(response => response.json())

        setPosts(postsResponse)
      } catch (e) {
        console.error(e);
      }
    }

    getPosts();
  }, []);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <div className={`App App--${theme}`}>
        <Menu user={user} />

        <RoutesComponent />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
