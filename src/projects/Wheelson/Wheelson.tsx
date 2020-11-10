import React from 'react';
import { Icon } from 'shared/Icon/Icon';

export default function Wheelson() {
  return (
    <div className="page">
      <div className="container">
        <h1>Wheelson Page</h1>

        <div>
          <Icon color="#B343CF" icon="chevronLeft" size={24} stroke={1.5} />
          <span className='inline-block'>Some text</span>
        </div>


      </div>
    </div>
  )
}
