/**
 * https://stackoverflow.com/questions/61770036/finding-percentage-values-given-min-and-max-in-javascript
 */
export function percentBetween(min: number, max: number) {
  return (value: number) => (100 * (value - min)) / (max - min);
}
