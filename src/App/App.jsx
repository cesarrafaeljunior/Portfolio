import { CarouselProvider } from "../Contexts/carouselContext";
import { RoutesMain } from "../Routes";

export const App = () => {
  return (
    <CarouselProvider>
      <RoutesMain />
    </CarouselProvider>
  );
};
