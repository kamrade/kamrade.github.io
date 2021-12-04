export const findTriadToCouple = (couple: number[][]): number[] => {
  
  const triad: number[] = [];
  
  couple[0].forEach((el, i) => {
    if (el === couple[1][i]) {
      triad[i] = el;
    } else {
      switch ((el + couple[1][i])) {
        case 1:
          triad[i] = 2;
          break;
        case 2:
          triad[i] = 1;
          break;
        case 3:
          triad[i] = 0;
          break;
        default:
          break;
      }
    }
  });

  return triad;

}