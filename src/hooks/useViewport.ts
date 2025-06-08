import { useState, useEffect } from 'react';

const useViewport = () => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  // Set dimensions and device type on mount and window resize
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      
      // Update device type states
      const isMobileView = window.innerWidth < 768;
      const isTabletView = window.innerWidth >= 768 && window.innerWidth < 1024;
      
      setIsMobile(isMobileView);
      setIsTablet(isTabletView);
      setIsDesktop(!isMobileView && !isTabletView);
    }
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return { width, height, isMobile, isTablet, isDesktop };
};

export default useViewport;