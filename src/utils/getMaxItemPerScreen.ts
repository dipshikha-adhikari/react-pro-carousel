import { ICarouselWrapperConfig } from "..";

export const getMaxItemPerScreen = (config?: ICarouselWrapperConfig) => {
  let maxItemPerScreen = config?.itemPerScreen || 1;
  if (config?.responsive) {
    for (const val of Object.values(config.responsive)) {
      maxItemPerScreen = Math.max(Number(val.itemPerScreen), maxItemPerScreen);
    }
  }
  return { maxItemPerScreen };
};
