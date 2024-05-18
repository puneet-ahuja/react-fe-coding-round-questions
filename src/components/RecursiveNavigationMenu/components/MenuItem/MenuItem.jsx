import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

import "./MenuItem.css";
import MenuList from "../MenuList/MenuList";

const MenuItem = ({ menuItem }) => {
  const { label, children } = menuItem;
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <li className="menu-item-container">
      <div className="menu-item-label">
        {label}
        {/* TODO: Need to replace this with React-icons library */}
        {children && children.length > 0 ? isCollapsed ? (
          <FaPlus onClick={() => setIsCollapsed(!isCollapsed)} size={24} />
        ) : (
          <FaMinus onClick={() => setIsCollapsed(!isCollapsed)} size={24} />
        ): null}
      </div>
      {children && children.length > 0 && isCollapsed === false && (
        <MenuList menus={children} />
      )}
    </li>
  );
};

export default MenuItem;
