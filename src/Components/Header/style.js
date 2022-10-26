import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 70px;

  padding: 10px 0;

  h1 {
    span {
      color: #824cfc;
    }
    color: white;
    &:hover {
      filter: brightness(1.2);
    }
  }

  button {
    background-color: #262626;
    .Menu {
      width: 35px;
      height: 35px;

      color: #8b9dff;

      transition: all 1.5s;

      &:hover {
        transform: rotate(360deg);
      }
      @media (min-width: 700px) {
        display: none;
      }
    }
  }
`;
