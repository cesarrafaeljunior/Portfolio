import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

import { MainPageContainer } from "./style";
import { techs } from "../../services/techs";
import { useRef } from "react";

export const MainPage = () => {
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <MainPageContainer>
      <section className="Section__Header">
        <div className="Box__PersonalImage">
          <figure>
            <img src="img/crdev.jpg" alt="César Rafael Photo" />
          </figure>
        </div>
        <div className="Box__Social__Networking">
          <figure>
            <a href="https://github.com/cesarrafaeljunior" target="-blank">
              <BsGithub className="GitHub SocialIcon" />
            </a>
            <p>Github</p>
          </figure>
          <figure>
            <a
              href="https://www.linkedin.com/in/cesarrafaeldevstudent/"
              target="-blank"
            >
              <BsLinkedin className="Linkedin SocialIcon" />
            </a>
            <p>Linkedin</p>
          </figure>
          <figure>
            <a href="https://www.youtube.com/" target="-blank">
              <BsYoutube className="Youtube SocialIcon" />
            </a>
            <p>Youtube</p>
          </figure>
        </div>
      </section>
      <section className="Section__Main">
        <p className="Biography">
          Meu nome é césar, tenho 22 anos e sou estudante de desenvolvimento web
          fullStack
        </p>
        <h2>Tecnologias</h2>
      </section>
      <section className="carousel">
        <ul ref={carousel}>
          {techs.map((tech) => {
            return (
              <li key={tech.name}>
                <div className="Tech__Info">
                  <img src={tech.img} alt=" React Logo" />
                  <p className="Name__Tech">{tech.name}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <button type="button" className="btnPrevious" onClick={handleLeftClick}>
          <GrFormPrevious className="btnCarousel" />
        </button>
        <button type="button" className="btnNext" onClick={handleRightClick}>
          <GrFormNext className="btnCarousel" />
        </button>
      </section>
    </MainPageContainer>
  );
};
