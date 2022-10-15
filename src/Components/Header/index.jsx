import { CgMenuGridR } from "react-icons/cg";
import { Logo } from "./Logo";
import { StyledHeader } from "./style";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <button>
        <CgMenuGridR className="Menu" />
      </button>
    </StyledHeader>
  );
};
