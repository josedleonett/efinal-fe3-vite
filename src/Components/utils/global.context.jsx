import React, { createContext, useEffect, useMemo, useReducer } from "react";
import { colorPalette } from "../../style/colorPaletteList";


const getStoredTheme = () => {
  return localStorage.getItem("theme");
};

const getStoredSelectedThemeColor = () => {
  const storedColor = localStorage.getItem("selectedThemeColor");
  return storedColor ? JSON.parse(storedColor) : null;
};

const getStoredFavorites = () => {
  const storedFavorites = localStorage.getItem("favorites");
  return storedFavorites ? JSON.parse(storedFavorites) : null;
};

export const initialState = {
  theme: getStoredTheme() || "light",
  selectedThemeColor: getStoredSelectedThemeColor() || colorPalette[0],
  themeColor: colorPalette,
  dentistList: [],
  dentistFavorites: getStoredFavorites() || [],
};



export const applyThemeColor = (selectedThemeColor) => {
  const root = document.documentElement;

  if (selectedThemeColor) {
    Object.entries(selectedThemeColor).forEach(([key, value]) => {
      if (key.startsWith("--")) {
        root.style.setProperty(key, value);
      }
    });
  }
};

applyThemeColor(initialState.selectedThemeColor);

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DENTIST_LIST":
      return { ...state, dentistList: action.payload };

    case "SET_THEME":
      localStorage.setItem("theme", action.payload);
      return { ...state, theme: action.payload };

    case "SET_THEME_COLOR":
      const selectedThemeColor = state.themeColor.find(
        (color) => color.index === action.payload
      );
      if (selectedThemeColor) {
        localStorage.setItem(
          "selectedThemeColor",
          JSON.stringify(selectedThemeColor)
        );
        applyThemeColor(selectedThemeColor);
        return { ...state, selectedThemeColor };
      }
      return state;

    case "ADD_FAVORITE":
      const updatedFavorites = [...state.dentistFavorites, action.payload];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return { ...state, dentistFavorites: updatedFavorites };

    case "REMOVE_FAVORITE":
      const filteredFavorites = state.dentistFavorites.filter(
        (dentist) => dentist.id !== action.payload
      );
      localStorage.setItem("favorites", JSON.stringify(filteredFavorites));
      return { ...state, dentistFavorites: filteredFavorites };

    default:
      return state;
  }
};

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = useMemo(() => {
    return { state, dispatch, applyThemeColor };
  }, [state]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};
