import "./RecursiveNavigationMenu.css";

import MenuList from "./components/MenuList/MenuList";

import menus from './mocks/data';

const RecursiveNavigationMenu = () => {
  return <div className="recursive-navigation-container">
    {
        menus && menus.length > 0 && <MenuList menus={menus}></MenuList>
    }
  </div>;
};

export default RecursiveNavigationMenu;
