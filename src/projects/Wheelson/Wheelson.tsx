import React from 'react';
import { Icon } from 'shared/Icon/Icon';
import { Button } from 'shared/Button/Button';

export default function Wheelson() {
  return (
    <div className="page">

      <header className="pt-5 pb-3"></header>

      <div className="container">
        <h1>Wheelson Page</h1>

        <div>
          <Icon color="#B343CF" icon="chevronLeft" size={24} stroke={1.5} />
          <span className='inline-block'>Some text</span>
        </div>

        <div className="mt-3">
          <Button>Base Button</Button>{' '}
          <Button type="primary">Primary Button</Button>
        </div>


      </div>
    </div>
  )
}
