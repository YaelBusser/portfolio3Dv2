// src/react-scroll-percentage.d.ts
declare module 'react-scroll-percentage' {
    import { ReactNode, RefObject } from 'react';

    export interface ScrollPercentageProps {
        children: (percentage: number, entry: IntersectionObserverEntry) => ReactNode;
        threshold?: number | number[];
        root?: RefObject<any>;
        rootMargin?: string;
    }

    export function useScrollPercentage(options?: {
        threshold?: number | number[];
        root?: RefObject<any>;
        rootMargin?: string;
    }): [RefObject<any>, number];

    const ScrollPercentage: (props: ScrollPercentageProps) => JSX.Element;
    export default ScrollPercentage;
}
