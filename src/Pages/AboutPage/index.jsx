import { ContainerAbout } from "./style";

export const AboutPage = () => {
  return (
    <ContainerAbout>
      <section className="Bio">
        <h1>Sobre mim</h1>
        <p>
          Sou estudante de desenvolvimento Web desde 2018, apaixonado pela
          tecnologia decidi me aprofundar no assunto participando de cursos que
          trabalhavam com metodologias ágeis, gosto muito de estudar e resolver
          desafios e minha meta de longo prazo é me tornar um programador de
          sucesso, que possa fazer parte de uma equipe top! e conseguir ajudar
          novos desenvolvedores a não desistirem dessa área que só tem a agregar
          em nossas vidas.
        </p>
      </section>
      <section className="Techs">
        <h2>Experiência nas tecnologias</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JavaScript-POO</li>
          <li>Git/Github</li>
          <li>ReactJs</li>
          <li>TypeScript</li>
        </ul>
      </section>
    </ContainerAbout>
  );
};
