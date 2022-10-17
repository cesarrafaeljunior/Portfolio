import { createContext, useEffect, useState, useRef } from "react";
export const CarouselContext = createContext({});

export const CarouselProvider = ({ children }) => {
  const [isReloadCarousel, setIsReloadCarousel] = useState(false);
  const [isPause, setIsPause] = useState(false);

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
    setTimeout(() => {
      const techWidth = carousel.current.offsetWidth;

      if (carousel.current.scrollLeft === 2304) {
        carousel.current.scrollLeft = 0;
        setIsReloadCarousel(!isReloadCarousel);
      } else {
        carousel.current.scrollLeft += techWidth;
        setIsReloadCarousel(!isReloadCarousel);
      }
    }, 2000);
  }, [isReloadCarousel, isPause]);

  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();

    const techWidth = carousel.current.offsetWidth;

    carousel.current.scrollLeft === 0
      ? (carousel.current.scrollLeft = 2590)
      : (carousel.current.scrollLeft -= techWidth);
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    const techWidth = carousel.current.offsetWidth;

    carousel.current.scrollLeft == 2304
      ? (carousel.current.scrollLeft = 0)
      : (carousel.current.scrollLeft += techWidth);
  };

  return (
    <CarouselContext.Provider
      value={{
        carousel,
        handleLeftClick,
        handleRightClick,
        pauseAnimation,
        playAnimation,
        isPause,
      }}
    >
      {children}
    </CarouselContext.Provider>
  );
};
