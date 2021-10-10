import {useState, useEffect} from 'react';

const sizeIsMd = () => window.innerWidth >= 768;

const useIsMd = () => {
  const [isMd, setIsMd] = useState(sizeIsMd);
  
  useEffect(() => {
    const checkNewSize = () => setIsMd(sizeIsMd());
    window.addEventListener('resize', checkNewSize);
    return () => window.removeEventListener('resize', checkNewSize);
  }, []);

  return isMd;
}
export default useIsMd;