import './tabs.scss'

const Tabs = ({ tabs = [], activeTab, setActiveTab }) => {
  const isTabActive = (name) => activeTab === name;

  return(
    <div className="tabs">
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
