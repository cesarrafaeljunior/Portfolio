import { createContext, useEffect, useState, useRef } from "react";
import { techs } from "../services/techs";
export const CarouselContext = createContext({});

export const CarouselProvider = ({ children }) => {
  const [isReloadCarousel, setIsReloadCarousel] = useState(false);
  const [maxContent, setMaxContent] = useState(0);
  const [hideClick, sethideClickF] = useState(0);
  const [isPause, setIsPause] = useState(true);

  const pauseAnimation = async () => {
    setIsPause(!isPause);
  };
  const playAnimation = async () => {
    setIsPause(!isPause);
  };

  useEffect(() => {
    if (isPause) {
      return;
    }
    setTimeout(async () => {
      const techWidth = carousel.current.offsetWidth;
      setMaxContent(maxContent + techWidth);

      if (maxContent > carousel.current.scrollLeft) {
        carousel.current.scrollLeft -= techWidth;
        if (hideClick > 0) {
          sethideClickF(hideClick - 1);
        }
        setIsReloadCarousel(!isReloadCarousel);
        if (carousel.current.scrollLeft == 0) {
          setMaxContent(0);
          setIsReloadCarousel(!isReloadCarousel);
        }
      } else {
        carousel.current.scrollLeft += techWidth;
        if (hideClick < techs.length - 1) {
          sethideClickF(hideClick + 1);
        }
      }

      setIsReloadCarousel(!isReloadCarousel);
    }, 1000);
  }, [isReloadCarousel, isPause]);

  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();

    const techWidth = carousel.current.offsetWidth;
    carousel.current.scrollLeft -= techWidth;

    if (hideClick > 0) {
      sethideClickF(hideClick - 1);
    }
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    const techWidth = carousel.current.offsetWidth;
    carousel.current.scrollLeft += techWidth;

    if (hideClick < techs.length) {
      sethideClickF(hideClick + 1);
    }
  };

  return (
    <CarouselContext.Provider
      value={{
        carousel,
        handleLeftClick,
        handleRightClick,
        pauseAnimation,
        playAnimation,
        hideClick,
        isPause,
      }}
    >
      {children}
    </CarouselContext.Provider>
  );
};
