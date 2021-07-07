import React from 'react';


/*

  1. The example of implementation, when function can
  get different types of data

*/
interface NumberBox {
  contents: number;
}

interface StringBox {
  contents: string;
}

interface BooleanBox {
  contents: boolean;
}

function setContents(box: StringBox, newContents: string): void;
function setContents(box: NumberBox, newContents: number): void;
function setContents(box: BooleanBox, newContents: boolean): void;
function setContents(box: {contents: any}, newContents: any) {
  box.contents = newContents;
}

let cont1 = {contents: 400}
setContents(cont1, 122);
console.log('new content 1:', cont1);

let cont2 = {contents: true}
setContents(cont2, false);
console.log('new content 2:', cont2);


/*

  2. Implementation with generics

*/

interface Box<Type> {
  contents: Type;
}

interface StringBox {
  contents: string;
}

let boxA: Box<string> = {contents: 'Hello'};
// boxA.contents;

let boxB: StringBox = {contents: 'world'};
// boxB.contents;

export default function TypeTutorials() {

  return (
    <div className="page">

      <header className="pt-5 pb-3" />

      <div className="container">
        <h1 className='mb-3 page-title'>Type tutorial</h1>
      </div>
    </div>
  )
}
