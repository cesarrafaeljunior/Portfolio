import { projects } from "../../services/projects";
import { ContainerProjects } from "./style";

export const ProjectsPage = () => {
  return (
    <ContainerProjects>
      <h1>Projetos</h1>

      <ul>
        {projects.map((project) => {
          return (
            <li key={project.name}>
              <div className="ContainerImg">
                <img src={project.img} alt={project.img} />
              </div>

              <p>{project.description}</p>
              <button type="button">Ver descrição completa</button>
              <div>
                <a target="_blank" href={project.deploy} rel="noreferrer">
                  Ver projeto
                </a>
                <a target="_blank" href={project.rep} rel="noreferrer">
                  Repositório
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </ContainerProjects>
  );
};
