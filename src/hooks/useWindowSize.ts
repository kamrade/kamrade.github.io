import { useState, useLayoutEffect } from 'react';
import { debounce } from 'lodash';

export interface IWindowSize {
  width: number;
  heigth: number;
}

export const useWindowSize = () => {
  
  const [windowSize, setWindowSize] = useState<IWindowSize>({
    width: 0,
    heigth: 0
  });

  useLayoutEffect(() => {
    
    const handleResize = () => {
      console.log('::: resize');
      setWindowSize({
        width: window.innerWidth,
        heigth: window.innerHeight
      })
    }

    const handleResizeDebounced = debounce(handleResize, 400);

    window.addEventListener('resize', handleResizeDebounced);

    handleResize();

    return () => window.removeEventListener('resize', handleResizeDebounced);


  }, []) // Empty array ensures that effect is only run on mount

  return windowSize;
  
}