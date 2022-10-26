import styled from "styled-components";

export const ContainerProjects = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px 15px;
  background-color: #d9d9d9;
  border-radius: 5px;
  ul {
    margin-top: 20px;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    li {
      display: flex;
      flex-direction: column;
      gap: 15px;
      padding: 10px;
      width: 100%;
      min-height: 300px;
      max-width: 300px;
      border: solid 2px #824cfc;
      border-radius: 8px;
      img {
        align-self: center;
        height: 50%;
        width: 50%;
      }
      p {
        text-overflow: ellipsis;
        overflow: hidden;
        max-height: 130px;
      }
      button {
        height: 40px;
        background-color: #824cfc;
        color: white;
        border-radius: 5px;
      }
      div {
        display: flex;
        justify-content: space-between;
        button {
          text-align: center;
          width: 100px;
          background-color: #262626;
        }
      }
    }
  }
`;
