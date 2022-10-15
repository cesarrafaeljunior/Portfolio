import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

import CrDev from "../../assets/img/crdev.jpg";
import ReactLogo from "../../assets/img/LogoReact.png";
import HtmltLogo from "../../assets/img/LogoHtml.png";
import CssLogo from "../../assets/img/LogoCss.png";
import { MainPageContainer } from "./style";

export const MainPage = () => {
  return (
    <MainPageContainer>
      <section className="Section__Header">
        <div className="Box__PersonalImage">
          <figure>
            <img src={CrDev} alt="César Rafael Photo" />
          </figure>
        </div>
        <div className="Box__Social__Networking">
          <figure>
            <a href="https://github.com/cesarrafaeljunior" target="-blank">
              <BsGithub className="GitHub SocialIcon" />
            </a>
          </figure>
          <figure>
            <a
              href="https://www.linkedin.com/in/cesarrafaeldevstudent/"
              target="-blank"
            >
              <BsLinkedin className="Linkedin SocialIcon" />
            </a>
          </figure>
          <figure>
            <a href="https://www.youtube.com/" target="-blank">
              <BsYoutube className="Youtube SocialIcon" />
            </a>
          </figure>
        </div>
      </section>
      <p>
        Meu nome é césar, tenho 22 anos e sou estudante de desenvolvimento web
        fullStack
      </p>
      <section className="carousel">
        <ul>
          <li>
            <button>
              <GrFormPrevious className="btnCarousel" />
            </button>
            <img src={ReactLogo} alt=" React Logo" />

            <button>
              <GrFormNext className="btnCarousel" />
            </button>
          </li>
        </ul>
      </section>
    </MainPageContainer>
  );
};
