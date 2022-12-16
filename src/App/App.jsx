import { CarouselProvider } from "../Contexts/carouselContext";
import { MenuProvider } from "../Contexts/menuContext";
import { RoutesMain } from "../Routes";

export const App = () => {
  return (
    <CarouselProvider>
      <MenuProvider>
        <RoutesMain />
      </MenuProvider>
    </CarouselProvider>
  );
};
