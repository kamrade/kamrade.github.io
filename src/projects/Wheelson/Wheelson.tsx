import React, {useRef, useEffect} from 'react';
import { Icon } from 'shared/Icon/Icon';
import { Button } from 'shared/Button/Button';

export default function Wheelson() {

  const buttonRef = useRef(null);

  const baseButtonClick = (e: React.SyntheticEvent) => {
    console.log(buttonRef);
    console.log(e.target);
  }

  return (
    <div className="page">

      <header className="pt-5 pb-3" />

      <div className="container">
        <h1>Wheelson Page</h1>

        <div>
          <Icon color="#B343CF" icon="chevronLeft" size={24} stroke={1.5} />
          <span className='inline-block'>Some text</span>
        </div>

        <div className="mt-3">
          <Button ref={buttonRef} onClick={baseButtonClick} >Base Button</Button>{' '}
          <Button type="primary">Primary Button</Button>
        </div>


      </div>
    </div>
  )
}
