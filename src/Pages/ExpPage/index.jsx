import { ContainerExpPage } from "./style";

export const ExpPage = () => {
  return (
    <ContainerExpPage>
      <section className="SectionExp">
        <h2>Experiência Acadêmica</h2>
        <ul>
          <li>
            <p className="InstitutionName">
              <span>Instituição: </span> Kenzie Academy Brasil
            </p>
            <p>
              <span>nome do curso: </span> Desenvolvimento Web FullStack
            </p>
            <p>
              <span>Data: </span>21/04/2022 até 21/04/2023
            </p>
            <p>
              <span>Aprendizado: </span>Habilidades Técnicas e Interpessoais
            </p>
            <p>
              <span>Descrição: </span>O curso da Kenzie é focado em preparar os
              alunos para o mercado de trabalho, com sua metodologia ágil coloca
              seus alunos de frente para situações reais, onde deverão em um
              determinado tempo limite apresentar uma solução através de
              entregas em forma de projetos. além disso existe uma equipe
              responsável por treinar as habilidades interpessoais de seus
              alunos, como controle emocional, regulamentação emocional,
              trabalho em equipe, etc...
            </p>
          </li>
        </ul>
      </section>
      <section className="SectionExp">
        <h2>Experiência Profissional</h2>
        <ul>
          <li>
            <p className="InstitutionName">
              <span>Empresa: </span> Kenzie Academy Brasil
            </p>
            <p>
              <span>Cargo: </span> Monitor
            </p>
            <p>
              <span>Data: </span>15/07/2022 até 15/09/2022
            </p>
            <p>
              <span>Aprendizado: </span>
              Habiliades de monitoria, leitura de código de terceiros, e
              entrevistas técnicas
            </p>
            <p>
              <span>Descrição: </span>O trabalho exercido, foi de monitorar a
              performance de novos alunos das novas turmas que ingressavam no
              curso, corrigindo suas tarefas e prestando suporte através de uma
              plataforma chamada Slack, onde os alunos diariamente colocavam
              suas dúvidas, o suporte era feito via chat/chamada, além também de
              aplicar testes técnicos, para mapear os conhecimentos e
              impedimentos de cada aluno dentro do curso.
            </p>
          </li>
        </ul>
      </section>
    </ContainerExpPage>
  );
};
