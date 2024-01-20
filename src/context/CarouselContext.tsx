import { ReactNode, createContext, useState } from "react";
import { ICarouselWrapperConfig } from "../types";

export interface ICarouselContext {
  config: ICarouselWrapperConfig;
  setConfig: (config: ICarouselWrapperConfig) => void;
}

export const Context = createContext<ICarouselContext>({
  config: {
    itemPerScreen: 1,
    height: "",
    gap: 0,
    arrow: true,
  },
  setConfig: () => {},
});

export const CarouselContext = ({ children }: { children: ReactNode }) => {
  const [config, setConfig] = useState<ICarouselWrapperConfig>({
    itemPerScreen: 1,
    height: "auto",
    gap: 0,
    arrow: true,
  });

  return (
    <Context.Provider value={{ config, setConfig }}>
      {children}
    </Context.Provider>
  );
};
