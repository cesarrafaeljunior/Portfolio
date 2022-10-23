import { useContext } from "react";
import { MenuContext } from "../../../Contexts/menuContext";
import { ContainerNav } from "./style";

export const MenuNav = () => {
  const { animation } = useContext(MenuContext);
  return (
    <ContainerNav animationName={animation}>
      <nav>
        <ul>
          <li>
            <a href="#">Sobre mim</a>
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
