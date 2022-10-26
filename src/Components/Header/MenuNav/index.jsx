import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MenuContext } from "../../../Contexts/menuContext";
import { ContainerNav } from "./style";

export const MenuNav = () => {
  const { animation, closeMenu } = useContext(MenuContext);
  const navigate = useNavigate();

  return (
    <ContainerNav animationName={animation}>
      <nav>
        <ul>
          <li>
            <Link
              onClick={(e) => {
                e.preventDefault();
                navigate("/about");
                closeMenu();
              }}
            >
              Sobre mim
            </Link>
          </li>
          <li>
            <Link
              onClick={(e) => {
                e.preventDefault();
                navigate("/experiencia");
                closeMenu();
              }}
            >
              Experiência
            </Link>
          </li>
          <li>
            <Link
              onClick={(e) => {
                e.preventDefault();
                // navigate("/about");
                closeMenu();
              }}
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link
              onClick={(e) => {
                e.preventDefault();
                // navigate("/about");
                closeMenu();
              }}
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </ContainerNav>
  );
};
