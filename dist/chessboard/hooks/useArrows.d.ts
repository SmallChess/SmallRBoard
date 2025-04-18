/// <reference types="react" />
import { Square, Arrow } from "../types";
type Arrows = Arrow[];
export declare const useArrows: (customArrows?: Arrows, areArrowsAllowed?: boolean, onArrowsChange?: ((arrows: Arrows) => void) | undefined, customArrowColor?: string) => {
    arrows: Arrow[];
    newArrow: Arrow | undefined;
    clearArrows: () => void;
    drawNewArrow: (fromSquare: Square, toSquare: Square) => void;
    setArrows: import("react").Dispatch<import("react").SetStateAction<Arrows>>;
    onArrowDrawEnd: (fromSquare: Square, toSquare: Square) => void;
};
export {};
