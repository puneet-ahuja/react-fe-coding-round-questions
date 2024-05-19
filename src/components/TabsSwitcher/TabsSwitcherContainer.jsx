import "./TabsSwitcherContainer.css";

import TabsSwitcher from "./components/TabsSwitcher/TabsSwitcher";

const TabsSwitcherContainer = () => {
  // 1. We need to create a data for tab switcher.

  // 2. We will just pass the data from here to the Tabs Container

  const tabsData = [
    {
      label: "Tab 1",
      content: <div>This is content 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is content 2</div>,
    },
    {
      label: "Tab 3",
      content: <div>This is content 3</div>,
    },
  ];

  return <TabsSwitcher tabsData={tabsData}></TabsSwitcher>;
};

export default TabsSwitcherContainer;
