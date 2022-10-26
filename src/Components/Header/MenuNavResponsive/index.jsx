import { Link, useNavigate } from "react-router-dom";
import { ContainerNav } from "./style";

export const MenuNavResponsive = () => {
  const navigate = useNavigate();

  return (
    <ContainerNav>
      <nav>
        <ul>
          <li>
            <Link
              onClick={(e) => {
                e.preventDefault();
                navigate("/about");
              }}
            >
              Sobre mim
            </Link>
          </li>
          <li>
            <Link
              onClick={(e) => {
                e.preventDefault();
                navigate("/experience");
              }}
            >
              Experiência
            </Link>
          </li>
          <li>
            <Link
              onClick={(e) => {
                e.preventDefault();
                navigate("/projects");
              }}
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link
              onClick={(e) => {
                e.preventDefault();
                navigate("/contact");
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
