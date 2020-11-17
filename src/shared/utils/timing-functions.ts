export const circ = (timeFraction: number) => 1 - Math.sin(Math.acos(timeFraction));

export const quad = (timeFraction: number) => Math.pow(timeFraction, 2);
