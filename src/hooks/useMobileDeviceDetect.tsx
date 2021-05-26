import { useState, useEffect } from 'react';

export function useMobileDeviceDetect(): boolean {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);
    setMobile(isMobile);
  }, []);

  return isMobile;
}
