import { ReactNode, createContext, useState } from "react";

export interface ICarouselContext {
  config: ICarouselWrapperConfig;
  setConfig: (config: ICarouselWrapperConfig) => void;
}

export interface ICarouselWrapperConfig {
  responsive?: IResponsive;
  itemPerScreen?: number;
  height?: number | string;
  gap?: number;
  arrow?: boolean;
}

export interface IResponsive {
  sm?: {
    breakPoint: number;
    itemPerScreen: number;
  };
  md?: {
    breakPoint: number;
    itemPerScreen: number;
  };
  lg?: {
    breakPoint: number;
    itemPerScreen: number;
  };
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
