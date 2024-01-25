import { CarouselWrapper } from './components/CarouselWrapper';
import { CarouselContext } from './context/CarouselContext';
import { Item } from './components/Item';

module.exports = { CarouselContext, CarouselWrapper, Item }

export interface ICarouselWrapperConfig {
    responsive?: IResponsive;
    itemPerScreen?: number;
    height?: number | string;
    gap?: number;
    arrow?: boolean;
}

export interface IResponsive {
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
export type CarouselProps = {
    children: React.ReactNode;
    snapAlign: string
};

export interface ICarouselContext {
    config: ICarouselWrapperConfig;
    setConfig: (config: ICarouselWrapperConfig) => void;
}


