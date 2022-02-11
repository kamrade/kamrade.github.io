// m permutation of n (partial permutation or sequences without repetition)
// C = c! / ((n - m)! * m!)
// C = 12! / ((12 - 2)! * 2!) = 12 * 11 / 2 = 66
// 66 couples of shapes

import { findTriadToCouple } from ".";

export interface ITriadsFound {
  [key: number]: number[];
}

export const triadDetector = (triadBoard: number[][]): ITriadsFound[] => {
  let counter = 1;
  let length  = triadBoard.length;
  let couples: number[][][] = [];

  let triadsFoundAll: ITriadsFound[] = [];

  triadBoard.map((node, i) => {
    for (let c = counter; c < length; c++) {
      couples.push([node, triadBoard[c]]);
      // [i, c] — current position
      let tert = findTriadToCouple([ node, triadBoard[c] ]);

      triadBoard.forEach((n, j) => {
        let des = 
          n[0] === tert[0]
          && n[1] === tert[1]
          && n[2] === tert[2]
          && n[3] === tert[3];

        if (des && j !== i && j !== c && (i < c && c < j)) {
          triadsFoundAll.push({
            [i]: node,
            [c]: triadBoard[c],
            [j]: tert
          });
        }
      });
    }
    return counter++;
  });

  return triadsFoundAll;
}