import React from 'react';
import { LocalNav } from 'UIKit/LocalNav/LocalNav';

export default function NoMatch() {
  return (
    <div className="NoMatch">
      <div className="container">
        <LocalNav>
          <h1 className="hyperH1 text-muted">
            <span className="h1-block">Nothing matched</span>
          </h1>
        </LocalNav>
      </div>
    </div>
  )
}
