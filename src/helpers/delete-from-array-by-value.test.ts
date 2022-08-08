import {deleteFromArrayByValue} from './delete-from-array-by-value';

describe('Delete array element(s) by value', () => {

  it('should remove element from array by its value', () => {
    expect( deleteFromArrayByValue([4, 54, 190, 3], 54) ).toEqual( [4, 190, 3] );
    expect( deleteFromArrayByValue([4, 54, 190, 3], 2) ).toEqual( [4,54,190,3] );
    expect( deleteFromArrayByValue([4, 2, 54, 190, 3, 2], 2) ).toEqual( [4,54,190,3] );
  });

  it('should remove all repeated elements in the array', () => {
    let cars = ['Ford', 'Toyota', 'Toyota', 'Isuzu', 'Seat', 'Kia', 'Toyota'];
    expect( deleteFromArrayByValue(cars, 'Toyota'))
      .toEqual( ['Ford', 'Isuzu', 'Seat', 'Kia'] );
    expect( deleteFromArrayByValue([true, true, true, false], true) ).toEqual( [false] );
  });

  it('should remove object element from array by its reference', () => {
    const obj1 = { name: 'Phillip', secondName: 'J', lastName: 'Fry'};
    const obj2 = {name: 'Leela', lastName: 'Turanga'}
    const obj3 = {name: 'Leela', lastName: 'Turanga'}
    let obj = [ obj1, obj2 ];
    expect( deleteFromArrayByValue(obj, obj1)).toEqual([ obj3 ]);
  });

  it ('should NOT remove object element(s) from array only by its value', () => {
    const obj1 = { name: 'Phillip', secondName: 'J', lastName: 'Fry'};
    const obj2 = {name: 'Leela', lastName: 'Turanga'}
    const obj3 = {name: 'Leela', lastName: 'Turanga'}
    let obj = [ obj1, obj2 ];
    expect( deleteFromArrayByValue(obj, obj3)).not.toEqual([ obj1 ]);
    expect( deleteFromArrayByValue(obj, obj3)).toEqual(obj);
  });

});
