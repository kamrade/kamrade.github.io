import React from 'react';
import './LocalNav.scss';

export const LocalNav = ({ children }: any) => {

  return (
    <div className={`muzq-local-nav`}>
      <div className="muzq-local-nav--content">
        {children}
      </div>
      <div className="muzq-local-nav--bottom-pattern" />
    </div>
  );
}
