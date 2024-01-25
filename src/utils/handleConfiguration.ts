import { ICarouselWrapperConfig } from "../";

export const handleConfiguration = (
  config: ICarouselWrapperConfig | undefined,
  setconfig: (config: ICarouselWrapperConfig) => void,
  configFromcontext: ICarouselWrapperConfig,
): void => {
  if (config) {
    setconfig({
      itemPerScreen: config?.itemPerScreen || configFromcontext.itemPerScreen,
      height: config.height || configFromcontext.height,
      responsive: config?.responsive,
      gap: config?.gap,
      arrow: config?.arrow !== undefined ? config.arrow : configFromcontext.arrow
    });
  }
};
