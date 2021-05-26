import { useState, useEffect } from 'react';
import { debounce } from 'lodash';

export interface IWindowSize {
  width: number;
  height: number;
}

export interface IWindowSizeServer {
  width: undefined;
  height: undefined;
}

export function useWindowSize() {

  // Initialize state with undefined width/height so server and clients renders match
  const [ windowSize, setWindowSize ] = useState<IWindowSize | IWindowSizeServer>({
    width: undefined,
    height: undefined
  });

  useEffect(() => {

    // Handler to call on window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    const handleResizeDebounced = debounce(handleResize, 400);

    window.addEventListener('resize', handleResizeDebounced);

    // initial value
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResizeDebounced);
  }, []);

  return windowSize;

}
