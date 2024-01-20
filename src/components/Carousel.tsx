import React from "react";
import styled, { css } from "styled-components";
import { useCarouselContext } from "../hooks/useCarouselContext";
import { ICarouselWrapperConfig } from "../types";

type CarouselProps = {
  children: React.ReactNode;
  snapAlign: string;
};

const Wrapper = styled.div<{
  props: ICarouselWrapperConfig;
  snapAlign: string;
}>`
  padding: ${(props) => `${props.props.gap}px`};
  scroll-snap-align: ${(props) => `${props.snapAlign}`};
  height: ${(props) =>
    `${typeof props.props.height === "number" ? props.props.height + "px" : props.props.height}`};
  min-width: ${(props) => `0 0 calc(100% / ${props.props.itemPerScreen})`};

  flex: ${(props) => `0 0 calc(100% / ${props.props.itemPerScreen})`};
  ${(props) => {
    const { responsive } = props.props;
    return css`
      @media screen and (min-width: ${responsive?.sm?.breakPoint}px) {
        flex: 0 0 calc(100% / ${responsive?.sm?.itemPerScreen});
      }
      @media screen and (min-width: ${responsive?.md?.breakPoint}px) {
        flex: 0 0 calc(100% / ${responsive?.md?.itemPerScreen});
      }
      @media screen and (min-width: ${responsive?.lg?.breakPoint}px) {
        flex: 0 0 calc(100% / ${responsive?.lg?.itemPerScreen});
      }
    `;
  }}
`;

const Carousel = ({ children, snapAlign }: CarouselProps) => {
  const { config } = useCarouselContext();
  return (
    <Wrapper props={config} snapAlign={snapAlign}>
      {children}
    </Wrapper>
  );
};

export default Carousel;
