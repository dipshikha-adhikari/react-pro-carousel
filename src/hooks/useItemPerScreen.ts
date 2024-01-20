import { useCallback, useEffect, useState } from "react";
import { ICarouselWrapperConfig } from "../types";
import { useCarouselContext } from "./useCarouselContext";

export const useItemPerScreen = () => {
  const { config } = useCarouselContext();
  const [itemPerScreen, setItemPerScreen] = useState<number>(1);

  const handleItem = useCallback(() => {
    const {
      responsive: r,
      itemPerScreen: itemOnScreen,
    }: ICarouselWrapperConfig = config;

    const width = window.innerWidth;
    if (r?.sm) {
      if (width > r.sm.breakPoint) {
        setItemPerScreen(r.sm.itemPerScreen);
        console.log("sm");
      } else {
        setItemPerScreen(itemOnScreen!);
      }
    }
    if (r?.md) {
      if (width > r.md.breakPoint) {
        console.log("md");
        setItemPerScreen(r.md.itemPerScreen);
      }
    }

    if (r?.lg) {
      if (width > r.lg.breakPoint) {
        setItemPerScreen(r.lg.itemPerScreen);
      }
    }
  }, [config]);

  useEffect(() => {
    handleItem();
    window.addEventListener("resize", handleItem);

    return () => {
      window.removeEventListener("resize", handleItem);
    };
  }, [config, handleItem]);

  return { itemPerScreen };
};
