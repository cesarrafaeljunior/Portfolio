import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { BsFillPauseCircleFill } from "react-icons/bs";
import { BsFillPlayCircleFill } from "react-icons/bs";

import { MainPageContainer } from "./style";
import { techs } from "../../services/techs";
import { useContext } from "react";
import { CarouselContext } from "../../Contexts/carouselContext";

export const MainPage = () => {
  const {
    carousel,
    handleLeftClick,
    handleRightClick,
    pauseAnimation,
    playAnimation,
    hideClick,
    isPause,
  } = useContext(CarouselContext);

  return (
    <MainPageContainer pauseAnimation={isPause}>
      <section className="Section__Header">
        <div className="Box__PersonalImage">
          <figure>
            <img src="img/crdev.jpg" alt="César Rafael Photo" />
          </figure>
        </div>
        <div className="Box__Social__Networking">
          <figure>
            <a
              href="https://github.com/cesarrafaeljunior"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="GitHub SocialIcon" />
            </a>
            <p>Github</p>
          </figure>
          <figure>
            <a
              href="https://www.linkedin.com/in/cesarrafaeldevstudent/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin className="Linkedin SocialIcon" />
            </a>
            <p>Linkedin</p>
          </figure>
          <figure>
            <a
              href="https://www.instagram.com/cesarrafaeljunior/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram className="Instagram SocialIcon" />
            </a>
            <p>Instagram</p>
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
                  <img src={tech.img} alt={tech.name} />
                  <p className="Name__Tech">{tech.name}</p>
                </div>
              </li>
            );
          })}
        </ul>
        {hideClick > 0 && isPause === true ? (
          <button
            type="button"
            className="btnPrevious"
            onClick={handleLeftClick}
          >
            <GrFormPrevious className="btnCarousel" />
          </button>
        ) : null}

        {hideClick <= techs.length - 2 && isPause === true ? (
          <button type="button" className="btnNext" onClick={handleRightClick}>
            <GrFormNext className="btnCarousel" />
          </button>
        ) : null}

        {isPause === true ? (
          <button type="button" className="btnControl" onClick={playAnimation}>
            <BsFillPlayCircleFill className="btnControl" />
          </button>
        ) : (
          <button type="button" className="btnControl" onClick={pauseAnimation}>
            <BsFillPauseCircleFill className="btnControl" />
          </button>
        )}
      </section>
    </MainPageContainer>
  );
};
