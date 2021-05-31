import { useRef, useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

import { StartScreen } from '../components/startscreen/startscreen-view';
import { Contact } from '../components/contact/contact-view';
import useWindowSize from '../utilities/useWindowSize';

const Home = () => {
  
  const ref = useRef(null);
  const [landscape, setLandscape] = useState<boolean>(false);
  const size = useWindowSize();
  const [mobileVersion, setMobileVersion] = useState<boolean>(false);
  
  useEffect(() => {
    if(size.width <= 768){
      setMobileVersion(false);
    }
  }, [size])

  useEffect(() => {
    if(ref?.current?.clientWidth > 768 && !landscape){
      setLandscape(true);
    } else if(ref?.current?.clientWidth <= 768 && landscape) {
      setLandscape(false);
    }
  })

  return (
    <div className="h-full w-full flex justify-center items-center bg-black">
      <div className={`relative overflow-hidden ${mobileVersion ? 'rounded-3xl' : 'rounded-none'}`}
        style={{width: (mobileVersion ? 360 : '100%'), height: (mobileVersion ? 640 : '100%')}} 
        ref={ref}
      >
        <StartScreen landscape={landscape} />
        <Contact landscape={landscape} />
      </div>
      {size.width > 768 ? <button className="bg-pwhite fixed top-4 right-4" onClick={() => setMobileVersion(!mobileVersion)}>Mobile version: {mobileVersion ? 'true' : 'false'}</button> : null}
    </div>
    
  )
}

export default Home;