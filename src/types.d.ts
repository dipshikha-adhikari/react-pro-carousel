export interface ICarouselWrapperConfig {
  responsive?: IResponsive;
  itemPerScreen?: number;
  height?: number | string;
  gap?: number
  arrow?: boolean
}

interface IResponsive {
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
