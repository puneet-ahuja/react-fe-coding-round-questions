import MenuItem from "../MenuItem/MenuItem";
import "./MenuList.css";

const MenuList = ({ menus = [] }) => {
  return (
    <ul className="menu-list-container">
      {menus &&
        menus.length > 0 &&
        menus.map((menuItem, index) => <MenuItem key={index} menuItem={menuItem} />)}
    </ul>
  );
};

export default MenuList;
