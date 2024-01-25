import { CarouselWrapper } from "./components/CarouselWrapper";
import { Item } from "./components/Item";
import { ICarouselWrapperConfig } from ".";

const App = () => {
  const config: ICarouselWrapperConfig = {
    height: 200,
    responsive: {
      sm: {
        breakPoint: 500,
        itemPerScreen: 2,
      },
    },
    arrow: false,
  };

  return (
    <div className="grid   " data-test="app">
      <CarouselWrapper config={config}>
        <Item>
          <div>1</div>
        </Item>
        <Item>
          {" "}
          <div>2</div>
        </Item>
        <Item>
          <div>1</div>
        </Item>
        <Item>
          {" "}
          <div>2</div>
        </Item>
        <Item>
          <div>1</div>
        </Item>
        <Item>
          {" "}
          <div>2</div>
        </Item>
      </CarouselWrapper>
    </div>
  );
};

export default App;
