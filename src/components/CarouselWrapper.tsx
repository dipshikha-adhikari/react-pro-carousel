import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useCarouselContext } from "../hooks/useCarouselContext";
import { useEventListeners } from "../hooks/useEventListeners";
import { useItemPerScreen } from "../hooks/useItemPerScreen";
import { ICarouselWrapperConfig } from "../types";
import { handleConfiguration } from "../utils/handleConfiguration";
import { handleScroll } from "../utils/handleScroll";
import Carousel from "./Carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type CarouselProps = {
  children: React.ReactNode;
  config?: ICarouselWrapperConfig;
};

const CarouselWrapper = ({ children, config }: CarouselProps) => {
  const { setConfig, config: configFromContext } = useCarouselContext();
  const carouselContainerRef = useRef<HTMLDivElement>(null);
  const { itemPerScreen } = useItemPerScreen();
  const childrenArray = React.Children.toArray(children);
  const [carouselWidth, setCarouselWidth] = useState(0);
  // const { maxItemPerScreen } = getMaxItemPerScreen(config);
  const [snapAlign, setSnapAlign] = useState<string>("");

  const modifiedChildren = useMemo(() => {
    const itemsBefore = childrenArray.slice(
      childrenArray.length - itemPerScreen
    );
    const itemsAfter = childrenArray.slice(0, itemPerScreen);
    if (childrenArray.length > itemPerScreen) {
      return [...itemsBefore, ...childrenArray, ...itemsAfter];
    } else {
      return childrenArray;
    }
  }, [childrenArray, itemPerScreen]);

  const { addEventListeners, removeEventListeners, mouseDown } =
    useEventListeners({
      carouselContainerRef,
      setSnapAlign,
      carouselWidth,
    });

  useEffect(() => {
    handleConfiguration(config, setConfig, configFromContext);

    setSnapAlign("start");
  }, []);

  useEffect(() => {
    addEventListeners();

    return () => {
      removeEventListeners();
    };
  }, [mouseDown]);

  const scrollHandler = useCallback(() => {
    handleScroll({
      carouselContainerRef,
      carouselWidth,
      itemPerScreen,
      modifiedChildren,
      gap: configFromContext?.gap,
    });
  }, [carouselWidth, carouselContainerRef, itemPerScreen, modifiedChildren]);

  useEffect(() => {
    scrollHandler();
    const currentRef = carouselContainerRef.current;
    if (carouselContainerRef.current) {
      carouselContainerRef.current.addEventListener("scroll", scrollHandler);
    }

    return () => {
      if (currentRef) {
        currentRef?.removeEventListener("scroll", scrollHandler);
      }
    };
  }, [scrollHandler]);

  useEffect(() => {
    if (carouselContainerRef.current) {
      const width = carouselContainerRef.current?.offsetWidth / itemPerScreen;
      setCarouselWidth(width);
    }
  }, [itemPerScreen]);

  const handleLeft = () => {
    if (carouselContainerRef.current) {
      carouselContainerRef.current.scrollLeft -= carouselWidth;
    }
  };

  const handleRight = () => {
    if (carouselContainerRef.current) {
      carouselContainerRef.current.scrollLeft += carouselWidth;
    }
  };

  return (
    <div className="flex items-center gap-2">
      {modifiedChildren.length > itemPerScreen && configFromContext?.arrow && (
        <IoIosArrowBack
          className="cursor-pointer "
          onClick={handleLeft}
          fontSize={20}
          data-test="left-btn"
        />
      )}
      <div
        className="flex  overflow-x-scroll  w-full snap-x snap-mandatory  cursor-pointer "
        ref={carouselContainerRef}
        data-test="container"
      >
        {modifiedChildren?.map((child, ind) => {
          return (
            <Carousel key={child.toString() + ind} snapAlign={snapAlign}>
              {child}
            </Carousel>
          );
        })}
      </div>
      {modifiedChildren.length > itemPerScreen && configFromContext?.arrow && (
        <IoIosArrowForward
          fontSize={20}
          className="cursor-pointer"
          onClick={handleRight}
          data-test="right-btn"
        />
      )}
    </div>
  );
};
export default CarouselWrapper;
