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
            <a href="#">Experiência</a>
          </li>
          <li>
            <a href="#">Projetos</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
    </ContainerNav>
  );
};
