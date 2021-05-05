export enum BreakPointType {
  XSmall = 0,
  Small = 576,
  Medium = 768,
  Large = 992,
  XLarge = 1200,
  XXLarge = 1400,
}
const IsBetweenBreakPoint = (
  left: BreakPointType,
  right: BreakPointType,
  length: number
): boolean => {
  return left <= length && length < right;
};
export const IsXSmallBreakPoint = (length: number): boolean => {
  return IsBetweenBreakPoint(
    BreakPointType.XSmall,
    BreakPointType.Small,
    length
  );
};
export const IsSmallBreakPoint = (length: number): boolean => {
  return IsBetweenBreakPoint(
    BreakPointType.Small,
    BreakPointType.Medium,
    length
  );
};
export const IsMediumBreakPoint = (length: number): boolean => {
  return IsBetweenBreakPoint(
    BreakPointType.Medium,
    BreakPointType.Large,
    length
  );
};
export const IsLargeBreakPoint = (length: number): boolean => {
  return IsBetweenBreakPoint(
    BreakPointType.Large,
    BreakPointType.XLarge,
    length
  );
};
export const IsXLargeBreakPoint = (length: number): boolean => {
  return IsBetweenBreakPoint(
    BreakPointType.XLarge,
    BreakPointType.XXLarge,
    length
  );
};
export const IsXXLargeBreakPoint = (length: number): boolean => {
  return BreakPointType.XXLarge <= length;
};
export const DecideBreakPoint = (length: number): BreakPointType => {
  if (IsXSmallBreakPoint(length)) return BreakPointType.XSmall;
  else if (IsSmallBreakPoint(length)) return BreakPointType.Small;
  else if (IsMediumBreakPoint(length)) return BreakPointType.Medium;
  else if (IsLargeBreakPoint(length)) return BreakPointType.Large;
  else if (IsXLargeBreakPoint(length)) return BreakPointType.XLarge;
  else if (IsXXLargeBreakPoint(length)) return BreakPointType.XXLarge;

  throw Error(`Invalid ${length} to be ${typeof BreakPointType}`);
};
export const BreakPointLengthString = (breakPoint: BreakPointType): string => {
  return `${breakPoint}px`;
};
