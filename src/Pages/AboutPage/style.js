import styled from "styled-components";

export const ContainerAbout = styled.section`
  width: 100%;
  padding: 40px 20px;
  background-color: #d9d9d9;
  border-radius: 8px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: entrance 0.9s forwards;
  @media (min-width: 700px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .Bio {
    text-align: left;
    line-height: 28px;
    text-align: center;
    color: #262626;
    p {
      border: dotted 2px #824cfc;
      border-radius: 8px;
      margin-top: 22px;
      padding: 10px;
    }
    @media (min-width: 700px) {
      width: 50%;
      min-height: 372px;
    }
  }
  .Techs {
    ul {
      border-radius: 8px;
      margin-top: 20px;
      list-style: none;
      text-align: center;
      border: dotted 2px #824cfc;
      color: #262626;
    }
    li {
      padding: 10px;
      border-bottom: dashed 1px #8b9dff;
    }
    @media (min-width: 700px) {
      width: 50%;
    }
  }
  h2 {
    font-size: 20px;
    color: #262626;
  }
  @keyframes entrance {
    0% {
      transform: scale(0.1);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;
