interface IMouseEvent {
    carouselContainerRef: React.RefObject<HTMLDivElement>;
    isMouseDown: boolean;
    startPoint: number;
    carouselWidth: number;
    setStartPoint: (props: number) => void;
    currentIndex: number;
    setCurrentIndex: (props: number) => void;
    setIsMouseDown: (props: boolean) => void;
    setSnapAlign: (props: string) => void;
}

export const handleMouseEvent = ({
    carouselContainerRef,
    startPoint,
    isMouseDown,
    setIsMouseDown,
    setCurrentIndex,
    currentIndex,
    setStartPoint,
    setSnapAlign,
    carouselWidth,
}: IMouseEvent) => {

    let prevPageX = 0;

    const mouseDown = (e: MouseEvent) => {
        e.preventDefault();
        if (carouselContainerRef.current) {
            carouselContainerRef.current.style.cursor = "grab";
        }
        setStartPoint(e.pageX);
        setIsMouseDown(true);
    };

    const mouseMove = (e: MouseEvent) => {
        if (!isMouseDown) return;
        e.preventDefault();
        setSnapAlign("none");

        if (carouselContainerRef.current) {
            const diff = (startPoint - e.pageX) * 0.05;
            carouselContainerRef.current.style.cursor = "grabbing";
            if (prevPageX < diff) {
                carouselContainerRef.current.scrollLeft += diff;
            } else {
                carouselContainerRef.current.scrollLeft -= diff;
            }
            carouselContainerRef.current.style.scrollBehavior = "auto";
            prevPageX = diff;
        }
    };

    const mouseUp = (e: MouseEvent) => {
        e.preventDefault();
        setSnapAlign("start");

        if (carouselContainerRef.current) {
            carouselContainerRef.current.style.cursor = "pointer";
            const difference = startPoint - e.pageX;
            if (difference > 100) {
                setCurrentIndex(currentIndex + 1);
                carouselContainerRef.current.scrollLeft += carouselWidth;
            } else if (difference < -100) {
                setCurrentIndex(currentIndex - 1);
                carouselContainerRef.current.scrollLeft -= carouselWidth;
            } else {
                carouselContainerRef.current.style.scrollBehavior = "smooth";
            }
        }
        setIsMouseDown(false);
    };

    const mouseLeave = (e: MouseEvent) => {
        e.preventDefault();
        setIsMouseDown(false);
    };

    return { mouseDown, mouseUp, mouseLeave, mouseMove };
};
