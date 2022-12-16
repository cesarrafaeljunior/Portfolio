import styled from "styled-components";

export const ContainerExpPage = styled.section`
  width: 100%;
  padding: 40px 20px;
  background-color: #d9d9d9;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: entranceExp 0.9s forwards;
  @media (min-width: 700px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  span {
    color: #101010;
    font-weight: 600;
    font-size: 14px;
  }
  p {
    font-size: 14px;
  }
  .SectionExp {
    color: #262626;
    padding: 20px;
    border: dotted 2px #824cfc;
    border-radius: 8px;

    ul {
      margin-top: 20px;
      display: flex;
      list-style: none;
      li {
        display: flex;
        flex-direction: column;
        gap: 20px;

        box-shadow: 0 0 5px 1.7px #262626;
        padding: 10px;
      }
    }
    h2 {
      font-size: 16px;
      width: 100%;
      border-bottom: solid 2px #824cfc;
    }
    .InstitutionName {
      color: #4400df;
      font-size: 14px;
    }
    @media (min-width: 700px) {
      width: 50%;
      min-height: 500px;
    }
  }
  @keyframes entranceExp {
    0% {
      transform: scale(0.1);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  background-color: #d9d9d9;
`;
