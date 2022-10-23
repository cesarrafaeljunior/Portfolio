import { createContext, useState } from "react";

export const MenuContext = createContext({});

export const MenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animation, setAnimation] = useState("");

  const openMenu = () => {
    setIsMenuOpen(true);
    setAnimation("open");
  };

  const closeMenu = () => {
    setAnimation("close");
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 900);
  };

  return (
    <MenuContext.Provider
      value={{ isMenuOpen, animation, openMenu, closeMenu }}
    >
      {children}
    </MenuContext.Provider>
  );
};
