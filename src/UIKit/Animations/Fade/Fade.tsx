import React, { FunctionComponent, useState, useEffect } from 'react';
import './Fade.scss';

interface IFadeProps {
  show: boolean;
  children: React.ReactNode;
}

export const Fade: FunctionComponent<IFadeProps> = ({ show, children }) => {

  const [shouldRender, setRender] = useState(show);

  useEffect(() => {
    if (show) {
      setRender(show);
    }
  }, [show]);

  const animationEndHandler = () => {
    if (!show) {
      setRender(false)
    }
  }

  return (
    <>
      { shouldRender && (
        <div onAnimationEnd={animationEndHandler} className={`animator animator-fade ${show ? 'animator-in' : 'animator-out'}`}>
          { children }
        </div>
      )}
    </>
  );
}
