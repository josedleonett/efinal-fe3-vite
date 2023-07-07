import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';
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
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/contact">Contact us</a>
          </li>
          <li>
            <a href="/favs">Favs</a>
          </li>
        </ul>
      </div>

      <div>
        <button className={styles.themeButton} onClick={handleThemeChange}>
          <FontAwesomeIcon icon={faAdjust} />
          Change theme{" "}
          {state.theme === "light" ? "to dark mode" : "to light mode"}
        </button>
        <form>
          <select onChange={handlerThemeColorChange} value={state.selectedThemeColor.index}>
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
