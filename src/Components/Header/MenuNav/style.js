import styled from "styled-components";

export const ContainerNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: calc(100vh - 50px);

  position: absolute;
  top: 60px;
  right: 0;
  z-index: 2000;

  background-color: #824cfc;

  animation: ${({ animationName }) => `${animationName}`} 0.9s;

  ul {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 80px;
    list-style: none;
  }
  a {
    display: flex;
    justify-content: center;
    background-color: #343434;
    color: white;
    border-radius: 8px;
    width: 150px;
    padding: 10px;
    border: solid 1px #343434;
    font-weight: bold;
  }
  @keyframes open {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes close {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;
