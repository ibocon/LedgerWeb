// module
import styled from 'styled-components';
import { BreakPointLengthString, BreakPointType } from './breakPoint';
// variable
export enum AbsoluteLengthUnit {
    Pixel = 'px',       // 1 inch = 96 pixels 
    Point = 'pt',       // 1 inch = 72 pixels
}
export enum RelativeLengthUnit {
    Percent = '%',      // Relative to the parent element
    ViewWidth = 'vw',   // Relative to 1% of the width of the viewport
    ViewHeight = 'vh',  // Relative to 1% of the height of the viewport
}
export type LengthUnit = AbsoluteLengthUnit | RelativeLengthUnit;
// styled component
export const Container = styled.div`
    max-width: ${BreakPointLengthString(BreakPointType.XLarge)};
    margin-left: auto;
    margin-right: auto;
`;
export * from './breakPoint';