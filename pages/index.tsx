import { useState, useEffect, useCallback } from 'react';
import { useSpring, animated, update } from 'react-spring';
import { NextPage } from 'next'

import { StartScreen } from '../components/startscreen/startscreen-view';
import { Contact } from '../components/contact/contact-view';
import { SliderButton } from '../components/slider-button/slider-button-view'
import useWindowSize from '../utilities/useWindowSize';

import { useResizeDetector } from 'react-resize-detector';

const Home: NextPage = () => {
  
  const { width, height, ref } = useResizeDetector();
  const size = useWindowSize();
  const [landscape, setLandscape] = useState<boolean>(false);
  const [mobileVersion, setMobileVersion] = useState<boolean>(false);
  const [scroll, setScroll] = useState<number>(0);

  const sizeAnim = useSpring({
    width: mobileVersion ? (size.height > 800 ? 420 : (size.height * 0.85 * 0.6)) : size.width, 
    height: mobileVersion ? (size.height > 800 ? 800 : (size.height * 0.85)) : size.height,
  })
  
  const styleMobileViewBackground = useSpring({
    backgroundImage: `linear-gradient(to bottom right, ${mobileVersion ? '#21a537' :  '#6d28d9'}, ${mobileVersion ? '#20cf4c' :  '#b45309'})`,
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

  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    let newScroll = scroll - event.deltaY;
    const upperEdge = -(window.innerHeight) - 200;
    if(newScroll > 0){
      newScroll = 0;
    } else if(newScroll < upperEdge) {
      newScroll = upperEdge;
    }

    setScroll(newScroll);
  }

  return (
    <>
      <div className="h-full w-full flex justify-center items-center bg-gradient-to-br from-purple-700 to-yellow-700">
        <animated.div className={`relative overflow-hidden shadow-lg ${mobileVersion ? 'rounded-3xl' : 'rounded-none'}`}
          style={{...sizeAnim}}
          ref={ref}
          onWheel={event => handleScroll(event)}
        >
          <StartScreen landscape={landscape} scroll={scroll} setScroll={setScroll} />
          <Contact landscape={landscape} setScroll={setScroll} />
        </animated.div>
        {size.width > 768 ? 
          <animated.div className="fixed top-4 right-4 text-pwhite flex items-center px-6 py-4 rounded-full" 
            style={{...styleMobileViewBackground}}
          > 
            <p className="mr-3">Mobile view:</p>
            <SliderButton onClick={handleSliderClick} value={mobileVersion} />
          </animated.div>
        : null}
      </div>
    </>
  )
}

export default Home;