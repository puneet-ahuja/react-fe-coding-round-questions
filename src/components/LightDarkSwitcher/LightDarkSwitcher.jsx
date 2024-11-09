import "./LightDarkSwitcher.css";

import useLocalStorage from "./useLocalStorage";

const LightDarkSwitcher = () => {

    const [theme, setTheme] = useLocalStorage('theme', 'light');
  return (
    <div className="light-dark-theme-switcher-container" data-theme={theme}>
      <h1 className="text">Hello World</h1>
      <button className="button" onClick={()=>{
        setTheme(theme === 'light'? 'dark' : 'light')
      }}>Change Theme</button>
    </div>
  );
};

export default LightDarkSwitcher;
