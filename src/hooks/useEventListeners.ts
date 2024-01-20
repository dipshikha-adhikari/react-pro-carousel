import { RefObject, useState } from "react";
import { handleMouseEvent } from "../utils/handleMouseEvent";

interface IEventListeners {
  carouselContainerRef: RefObject<HTMLDivElement>;
  setSnapAlign: (props: string) => void;
  carouselWidth: number;
}
export const useEventListeners = ({
  carouselContainerRef,
  setSnapAlign,
  carouselWidth,
}: IEventListeners) => {
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const [startPoint, setStartPoint] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const { mouseDown, mouseLeave, mouseMove, mouseUp } = handleMouseEvent({
    isMouseDown,
    setIsMouseDown,
    startPoint,
    setStartPoint,
    currentIndex,
    setCurrentIndex,
    carouselContainerRef,
    setSnapAlign,
    carouselWidth,
  });

  const addEventListeners = () => {
    if (carouselContainerRef.current) {
      carouselContainerRef.current.addEventListener("mousedown", mouseDown);
      carouselContainerRef.current.addEventListener("mousemove", mouseMove);
      carouselContainerRef.current.addEventListener("mouseup", mouseUp);
      carouselContainerRef.current.addEventListener("mouseleave", mouseLeave);
    }
  };

  const removeEventListeners = () => {
    if (carouselContainerRef.current) {
      carouselContainerRef.current.removeEventListener("mousedown", mouseDown);
      carouselContainerRef.current.removeEventListener("mousemove", mouseMove);
      carouselContainerRef.current.removeEventListener("mouseup", mouseUp);
      carouselContainerRef.current.removeEventListener(
        "mouseleave",
        mouseLeave,
      );
    }
  };
  return { addEventListeners, mouseDown, removeEventListeners };
};
