import React, {useRef} from 'react';
import { Icon } from 'shared/Icon/Icon';
import { Button } from 'shared/Button/Button';
import { Input } from 'shared/Input/Input';

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

        <div className="mb-5">
          <Icon color="#B343CF" icon="chevronLeft" size={24} stroke={1.5} />
          <span className='inline-block'>Some text</span>
        </div>

        <div className="my-2">
          <Button ref={buttonRef} onClick={baseButtonClick} >Base Button</Button>{' '}
          <Button type="primary">Primary Button</Button>{' '}
          <Button disabled>Disabled Button</Button>{' '}
          <Button type="dark">Dark Button</Button>{' '}
        </div>

        <div className="my-2">
          <Button type="secondary">
            <span style={{marginLeft: '-6px'}}>
              <Icon color="#B343CF" icon="chevronLeft" size={20} stroke={1.5} />
            </span>
            Secondary Button with Icon
          </Button>{' '}
        </div>

        <div className="my-2">
          <Input />
        </div>



      </div>
    </div>
  )
}
