import { useContext } from "react";

import { ThemeContext } from "../../context/theme";

import './tabs.scss'

const Tabs = ({ tabs = [], activeTab, setActiveTab }) => {
  const [ theme ] = useContext(ThemeContext);
  const isTabActive = (name) => activeTab === name;

  return(
    <div className={`tabs tabs--${theme}`}>
      <div className="tabs-wrap">
        { tabs.map(({ title, key }) => (
          <div
            key={key}
            className={`tabs-wrap-cell ${isTabActive(key) ? 'tabs-active' : ''}`}
            onClick={() => setActiveTab(key)}
          >
            <p className="tabs-wrap-cell-title" >{title}</p>
          </div>
        )) }
      </div>
    </div>
  )
}

export default Tabs
