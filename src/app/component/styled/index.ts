// module
import styled from 'styled-components';
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
export enum BreakPoint {
    XSmall = 0,
    Small = 576,
    Medium = 768,
    Large = 992,
    XLarge = 1200,
    XXLarge = 1400
}
// method
export function DecideBreakPoint(width : number) : BreakPoint {
    if(width < BreakPoint.Small)
        return BreakPoint.XSmall;
    else if(width < BreakPoint.Medium)
        return BreakPoint.Small;
    else if(width < BreakPoint.Large)
        return BreakPoint.Medium;
    else if(width < BreakPoint.XLarge)
        return BreakPoint.Large;
    else if(width < BreakPoint.XXLarge)
        return BreakPoint.XLarge;
    else
        return BreakPoint.XXLarge;
}
export function BreakPointLengthString(breakPoint : BreakPoint) : string {
    return `${breakPoint}px`;
}
// styled component
export const Container = styled.div`
    max-width: ${BreakPointLengthString(BreakPoint.XLarge)};
    margin-left: auto;
    margin-right: auto;
`;