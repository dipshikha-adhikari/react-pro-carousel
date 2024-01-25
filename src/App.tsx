import { CarouselWrapper } from "./components/CarouselWrapper";
import { Item } from "./components/Item";
import { CarouselContext } from "./context/CarouselContext";
import { ICarouselWrapperConfig } from ".";

const App = () => {
  const config: ICarouselWrapperConfig = {
    height: 200,
    responsive: {
      sm: { breakPoint: 500, itemPerScreen: 2 },
    },
  };

  return (
    <div className="grid   " data-test="app">
      <CarouselContext>
        <CarouselWrapper config={config}>
          <Item>
            <div className="grid place-items-center h-full">1</div>
          </Item>
          <Item>
            {" "}
            <div className="grid place-items-center h-full">4</div>
          </Item>
        </CarouselWrapper>
      </CarouselContext>
    </div>
  );
};

export default App;
