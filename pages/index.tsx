import { useRef, useState, useEffect, useCallback } from 'react';
import { useSpring, animated, update } from 'react-spring';

import { StartScreen } from '../components/startscreen/startscreen-view';
import { Contact } from '../components/contact/contact-view';
import { SliderButton } from '../components/slider-button/slider-button-view'
import useWindowSize from '../utilities/useWindowSize';

import { useResizeDetector } from 'react-resize-detector';

const Home = () => {
  
  const { width, height, ref } = useResizeDetector();
  const size = useWindowSize();
  const [landscape, setLandscape] = useState<boolean>(false);
  const [mobileVersion, setMobileVersion] = useState<boolean>(false);

  const sizeAnim = useSpring({
    width: mobileVersion ? 380 : size.width, 
    height: mobileVersion ? '85%' : '100%',
  })
  
  useEffect(() => {
    if(width > 768){
      setLandscape(true);
    } else if(width <= 768){
      setLandscape(false);
    }
  }, [width])

  useEffect(() => {
    if(size.width <= 768){
      setMobileVersion(false);
    }
  }, [size])

  const handleSliderClick = () => {
    setMobileVersion(!mobileVersion)
  }

  return (
    <>
      <div className="h-full w-full flex justify-center items-center bg-gradient-to-br from-purple-700 to-yellow-700">
        <animated.div className={`relative overflow-hidden shadow-lg ${mobileVersion ? 'rounded-3xl' : 'rounded-none'}`}
          style={{...sizeAnim}}
          ref={ref}
        >
          <StartScreen landscape={landscape} />
          <Contact landscape={landscape} />
        </animated.div>
        {size.width > 768 ? 
          <div className="fixed top-4 right-4 text-pwhite flex items-center"> 
            <p className="mr-3">Mobile view:</p>
            <SliderButton onClick={handleSliderClick} />
          </div>
        : null}
        
        
      </div>
    </>
  )
}

export default Home;