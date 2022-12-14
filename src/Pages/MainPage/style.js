import styled from "styled-components";

export const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px 15px;
  background-color: #d9d9d9;
  border-radius: 5px;
  animation: entrance 0.9s forwards;
  .Section__Header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;

    @media (min-width: 600px) {
      flex-direction: column;
      gap: 0;
    }
  }

  .Section__Main {
    h2 {
      margin-top: 30px;
      text-decoration: underline;
      color: #280080;
      text-align: center;
    }
  }

  .Box__PersonalImage {
    width: 149px;
    height: 100%;
    border-radius: 70%;

    img {
      width: 100%;
      height: 100%;
      box-shadow: 1px 2px 4px 1px rgb(99, 59, 188);
      border-radius: 70%;
    }
  }

  .Box__Social__Networking {
    display: flex;
    flex-direction: column;
    gap: 25px;

    max-height: 149px;

    margin-right: 10%;

    @media (min-width: 600px) {
      flex-direction: row;
      justify-content: center;
      align-items: center;

      margin: 30px 0 0 0;

      gap: 50px;
    }
    figure {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 5px;

      height: 100%;

      font-size: 14px;
      font-weight: 400;
      p {
        display: none;

        @media (min-width: 375px) {
          display: flex;
        }
      }
    }

    .SocialIcon {
      width: 25px;
      height: 25px;

      box-shadow: 2px 0 3px 1px rgb(99, 59, 188);
      border-radius: 30%;

      transition: ease-in 0.3s;
    }
    .GitHub:hover {
      color: #a6a6a6;
    }
    .Linkedin:hover {
      color: #1a8af1;
    }
    .Instagram:hover {
      color: #ffad62;
    }
  }

  .Biography {
    text-align: center;
    font-weight: 500;
    margin-top: 20px;
  }

  .carousel {
    position: relative;
    background-color: #633bbc;

    padding-bottom: 10px;

    width: 100%;
    max-width: 800px;

    margin-top: 0px;

    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 100%;
      height: 100%;

      overflow-x: auto;
      scroll-behavior: smooth;

      list-style: none;
    }

    ul::-webkit-scrollbar {
      display: none;
    }

    li {
      min-width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
      .Tech__Info {
        display: flex;
        flex-direction: column;
        align-items: center;

        .Name__Tech {
          margin: 10px 0 0 0;

          font-size: 18px;
          font-weight: bold;
          color: #ffffff;
        }
      }

      img {
        margin-top: 30px;
        width: 120px;
        animation: ${({ pauseAnimation }) => !pauseAnimation && "techCarousel"}
          5s linear infinite;
        border-radius: 100%;
      }
    }

    button {
      align-self: center;
      background-color: #633bbc;
      .btnCarousel {
        width: 40px;
        height: 40px;
      }
    }

    .btnPrevious {
      position: absolute;
      top: 70px;
      left: 10px;
    }
    .btnNext {
      top: 70px;
      right: 10px;
      position: absolute;
    }
    .btnControl {
      width: 25px;
      height: 25px;
      top: 5px;
      right: 10px;
      position: absolute;
      color: white;
    }
  }

  @keyframes techCarousel {
    100% {
      transform: rotate(360deg);
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
