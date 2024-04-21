import React, { createContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const [activeLink, setActiveLink] = useState("/");
  const navigateTo = (link) => {
    setActiveLink(link);
    navigate(link);
    setIsOpen(false);
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        // Theme
        navigateTo,
        isOpen,
        setIsOpen,
        activeLink,
        setActiveLink,
      }}
    >
      <div>{children}</div>
    </GlobalContext.Provider>
  );
};
