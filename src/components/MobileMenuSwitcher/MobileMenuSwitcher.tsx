import React, { useState, memo } from 'react';
import ReactDOM from 'react-dom';
import {HamburgerIcon} from 'UIKit/Icons';
import { AdaptiveMenu } from 'components/AdaptiveMenu/AdaptiveMenu';

export interface IMobileMenuSwitcherState {
  isShowed: boolean;
};

const MobileMenuSwitcherM = () => {

  const [ state, setState ] = useState<IMobileMenuSwitcherState>({
    isShowed: false
  });

  const toggleMenu = () => {
    setState((prevState: IMobileMenuSwitcherState) => {
      return {
        isShowed: !prevState.isShowed
      }
    });
  }

  return (
    <>
      <button onClick={toggleMenu} className="muzq-icon-button">
        <HamburgerIcon />
      </button>

      {ReactDOM.createPortal(
        <AdaptiveMenu isShowed={state.isShowed} toggle={toggleMenu} />,
        document.getElementById('mobile-menu') as HTMLElement
      )}
    </>
  );
}

export const MobileMenuSwitcher = memo(MobileMenuSwitcherM);
