import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaAdjust } from "react-icons/fa";
import styles from '../style/Navbar.module.css';
import { ContextGlobal } from './utils/global.context.jsx';

const Navbar = () => {
  const { state, dispatch, applyThemeColor } = useContext(ContextGlobal);

  const handleThemeChange = () => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    dispatch({ type: "SET_THEME", payload: newTheme });
  };

  const handlerThemeColorChange = (event) => {
    const selectedThemeColorIndex = parseInt(event.target.value);
    dispatch({ type: "SET_THEME_COLOR", payload: selectedThemeColorIndex });
  };

  useEffect(() => {
    applyThemeColor(state.selectedThemeColor);
  }, [state.selectedThemeColor]);



  return (
    <nav className={`${styles.navbar} ${styles[state.theme]}`}>
      <div>
        <ul>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/favs">Favs</Link>
          </li>
        </ul>
      </div>

      <div>
        <button className={styles.themeButton} onClick={handleThemeChange}>
          <FaAdjust />
          <p>
            Change theme{" "}
            {state.theme === "light" ? "to dark mode" : "to light mode"}
          </p>
        </button>
        <form>
          <select
            name="colorList"
            onChange={handlerThemeColorChange}
            value={state.selectedThemeColor.index}
          >
            {state.themeColor.map((color) => (
              <option key={color.index} value={color.index}>
                {color.name}
              </option>
            ))}
          </select>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
