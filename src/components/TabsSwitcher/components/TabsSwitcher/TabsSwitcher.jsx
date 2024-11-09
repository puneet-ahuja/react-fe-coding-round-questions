import { useState } from "react";


import './TabsSwitcher.css';

const TabsSwitcher = ({ tabsData }) => {
  // 1. We should maintain which element is selected? - State for this

  // 2. We have to render the content based upon our selected tabs - Abve state will handle this as well.

  // UI
  // 1. Tabs Switcher UI
  // 2. Content UI


  const [selectedIndex , setSelectedIndex] = useState(0);



  // TODO: Cursor pointer

  return (
    <div className="tabs-switcher-container">
      <nav className="tabs-navigation">
        {tabsData && tabsData.length > 0 && tabsData.map(({label, content},index)=>{
            return <button key={index} onClick={()=>{
                setSelectedIndex(index)
            }}
            className={`tab${selectedIndex === index? ' selected-tab': ''}`}
            >{label}</button>
        })}
      </nav>

      <section className="content">
        {
            tabsData[selectedIndex].content
        }
      </section>
    </div>
  );
};

export default TabsSwitcher;
