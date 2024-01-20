type Props = {
  carouselContainerRef: React.RefObject<HTMLDivElement>;
  carouselWidth: number;
  itemPerScreen: number;
  modifiedChildren: React.ReactNode[];
  gap: number | undefined
};

export const handleScroll = ({
  carouselContainerRef,
  carouselWidth,
  itemPerScreen,
  modifiedChildren,
  gap
}: Props) => {
  if (!carouselContainerRef.current) return;
  const ccrc = carouselContainerRef.current;
  let newGap = gap ? gap + 10 : 10
  console.log(ccrc.scrollLeft, ccrc.scrollWidth - ccrc.offsetWidth, newGap)
  if (ccrc.scrollLeft >= ccrc.scrollWidth - ccrc.offsetWidth - newGap) {
    ccrc.style.scrollBehavior = "auto";
    ccrc.scrollLeft = carouselWidth * itemPerScreen;
  } else if (ccrc.scrollLeft <= newGap) {
    ccrc.style.scrollBehavior = "auto";
    const pos =
      itemPerScreen === 1
        ? modifiedChildren.length - itemPerScreen - 1
        : modifiedChildren.length - itemPerScreen;
    ccrc.scrollLeft = carouselWidth * pos;
  } else {
    ccrc.style.scrollBehavior = "smooth";
  }
};
