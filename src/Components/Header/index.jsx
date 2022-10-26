import { useContext } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { AiFillCloseSquare } from "react-icons/ai";

import { MenuContext } from "../../Contexts/menuContext";
import { Logo } from "./Logo";
import { MenuNav } from "./MenuNav";
import { StyledHeader } from "./style";

export const Header = () => {
  const { isMenuOpen, openMenu, closeMenu } = useContext(MenuContext);

  return (
    <StyledHeader>
      <Logo />

      {isMenuOpen === true ? (
        <>
          <MenuNav />
          <button type="button" onClick={closeMenu}>
            <AiFillCloseSquare className="Menu" />
          </button>
        </>
      ) : (
        <button type="button" onClick={openMenu}>
          <CgMenuGridR className="Menu" />
        </button>
      )}
    </StyledHeader>
  );
};
