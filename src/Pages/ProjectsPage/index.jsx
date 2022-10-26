import { ContainerProjects } from "./style";

export const ProjectsPage = () => {
  return (
    <ContainerProjects>
      <h1>Projetos</h1>
      <ul>
        <li>
          <img src="img/LogoGitHub.png" alt="Imagem do projeto" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            suscipit perspiciatis dolores ipsa quia, explicabo ab nostrum illum
            quod modi soluta expedita! Doloremque quisquam quo sint quam,
            quaerat placeat numquam?
          </p>
          <button>Detalhes</button>
          <div>
            <button>Abrir projeto</button>
            <button>Repositório</button>
          </div>
        </li>
      </ul>
    </ContainerProjects>
  );
};
