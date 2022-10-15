import styled from "styled-components";

export const MainPageContainer = styled.div`
  padding: 20px 15px;
  background-color: #d9d9d9;
  border-radius: 5px;

  .Section__Header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 149px;
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

    margin-right: 30px;

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
    .Youtube:hover {
      color: #ff4040;
    }
  }

  p {
    font-weight: 500;
    margin-top: 50px;
  }

  .carousel {
    height: 120px;
    background-color: #633bbc;
    margin: 50px -15px 0 -15px;

    ul {
      display: flex;
      align-items: center;
      justify-content: space-around;

      width: 100%;
      height: 100%;

      list-style: none;
    }
    li {
      display: flex;
      align-items: center;
      justify-content: space-around;

      width: 100%;

      img {
        width: 120px;
        height: 100%;
        animation: techcarousel 5s linear infinite;
        border-radius: 100%;
      }
      button {
        background-color: #633bbc;
        .btnCarousel {
          width: 40px;
          height: 40px;
        }
      }
    }
  }

  @keyframes techcarousel {
    100% {
      transform: rotate(360deg);
    }
  }
`;
