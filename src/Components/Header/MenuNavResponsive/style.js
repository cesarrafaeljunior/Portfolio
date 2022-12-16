import styled from "styled-components";

export const ContainerNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  display: none;
  width: 100%;
  @media (min-width: 700px) {
    display: flex;
  }
  ul {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 30px;
    list-style: none;
  }
  a {
    transition: all 0.5s;
    justify-content: right;
    background-color: #fff;
    color: 343434;
    border-radius: 8px;
    width: 150px;
    padding: 6px 10px;
    border: solid 1px #fff;
    font-weight: bold;
    &:hover {
      background-color: #824cfc;
      border: solid 1px #824cfc;
      color: #fff;
    }
  }
`;
