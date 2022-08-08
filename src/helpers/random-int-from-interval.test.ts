import {randomIntFromInterval} from './random-int-from-interval';


describe('Random integer from interval (inclusive)', () => {

  it ('should generate random value in a specified range (has max and min)', () => {
    let values = [];
    for (let i = 0; i < 1000; i++) {
      values.push(randomIntFromInterval(0, 100));
    }
    values.map(value => expect(value).toBeGreaterThanOrEqual(0));
    values.map(value => expect(value).toBeLessThanOrEqual(100));
  });

});
