export const atC = (fn: () => unknown) => {
  if (typeof window !== "undefined") {
    fn();
  }
};
export const atS = (fn: () => unknown) => {
  if (typeof window === "undefined") {
    fn();
  }
};
export const atCS = (fn: () => unknown) => {
  atS(fn), atC(fn);
};
