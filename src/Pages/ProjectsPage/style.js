import styled from "styled-components";

export const ContainerProjects = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px 15px;
  background-color: #d9d9d9;
  border-radius: 5px;

  animation: entrance 0.9s forwards;
  ul {
    margin-top: 20px;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    @media (min-width: 700px) {
      flex-direction: row;
      gap: -20px;
      justify-content: center;
    }
    li {
      transition: all 0.5s;
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 10px;
      width: 100%;
      min-height: 300px;
      max-width: 300px;
      border: solid 2px #824cfc;
      border-radius: 8px;

      &:hover {
        background-color: #ba9bff;
      }
      .ContainerImg {
        height: 150px;
        width: 100%;
      }
      img {
        width: 100%;
        height: 100%;
        transition: all 0.3s;
        cursor: pointer;
        &:hover {
          transform: scale(1.2);
        }
      }
      p {
        cursor: pointer;
        overflow: hidden;
        max-height: 6.2em;
      }
      button {
        background-color: transparent;
        border: none;
        color: #262626;
        font-size: 14px;
        &:hover {
          color: #824cfc;
          text-decoration: underline #824cfc;
          font-weight: bold;
        }
      }
      div {
        display: flex;
        justify-content: space-between;
        a {
          transition: all 0.5s;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          width: 100px;
          height: 48px;
          background-color: #262626;
          color: white;
          border-radius: 8px;
          font-size: 13px;
          font-weight: bold;
          &:hover {
            background-color: #d9d9d9;
            color: #262626;
          }
        }
      }
    }
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
