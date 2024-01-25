### react-pro-carousel

##### Carousel component built with React.

### Installation

**npm**

```bash
npm install react-pro-carousel --save
```

**yarn**

```bash
yarn add react-pro-carousel
```

**Import css files**

import "react-pro-carousel/dist/style.css";

### Example

```js
import React from "react";
import { CarouselWrapper, Item, ICarouselWrapperConfig} from "react-pro-carousel";


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
```
