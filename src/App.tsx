import CarouselWrapper from "./components/CarouselWrapper";
import { CarouselContext } from "./context/CarouselContext";

export const App = () => {
  const config = {
    responsive: {
      sm: {
        breakPoint: 600,
        itemPerScreen: 2,
      },
      // md: {
      //   breakPoint: 800,
      //   itemPerScreen: 3,
      // },
      // lg: {
      //   breakPoint: 1000,
      //   itemPerScreen: 4,
      // },
    },
    // itemPerScreen: 2,
    height: 200,
    // gap: 4,
    // arrow: true,
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
            <div className="grid place-items-center h-full">2</div>
          </Item>
          <Item>
            {" "}
            <div className="grid place-items-center h-full">3</div>
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

type ItemProps = {
  children: React.ReactNode;
};

const Item = ({ children }: ItemProps) => {
  return <div className="h-full ">{children}</div>;
};
