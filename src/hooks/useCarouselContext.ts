import { useContext } from "react";
import { Context } from "../context/CarouselContext";

export const useCarouselContext = () => {
    return useContext(Context);
};
