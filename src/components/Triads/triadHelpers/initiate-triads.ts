import { randomIntFromInterval } from "helpers";

export const initiateTriads = () => {
  let triads = [];
  let current = [];
  for (let i = 0; i < 12; i++) {
    current = [];
    for (let j = 0; j < 4; j++) {
      current.push(randomIntFromInterval(0, 2));
    }
    triads.push(current);
  }
  return triads;
}