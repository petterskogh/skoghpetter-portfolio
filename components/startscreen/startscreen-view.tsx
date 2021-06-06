import React, { useState, useEffect } from 'react';
import {useSpring, animated} from 'react-spring';
import { useDrag } from 'react-use-gesture'

type Props = {
  landscape: boolean
  scroll: number
  setScroll: React.Dispatch<React.SetStateAction<number>>
}

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const StartScreen: React.FC<Props> = ({landscape, scroll, setScroll}) => {

  const styleFadeIn = useSpring({ from: {opacity: 0}, to: {opacity: 1}, config: { duration: 500 }  })
  const styleFromLeft = useSpring({from: { marginLeft: '-100vw' }, to: { marginLeft: '0' }})
  const styleFromRight = useSpring({from: { marginRight: '-100vw' }, to: { marginRight: '0' }})
  const [flipFade, setFlipFade] = useState(false)
  const styleFadeInAndOut = useSpring({
    from: { opacity: 0.6 },
    to: { opacity: 1 },
    reset: true, reverse: flipFade, config: { duration: 2000 }, onRest: () => setFlipFade(!flipFade),
  })

  const [{ y }, apiY] = useSpring(() => ({ y: 0 }))
  const [{borderRadius}, apiBR] = useSpring(() => ({borderRadius: 0}))

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement: [xDelta, yDelta], velocity }) => {
    let dropPosition = 0;
    if(!down && velocity > 0.2 && yDelta < 0) {
      dropPosition = -(window.innerHeight) - 200;
      setScroll(-(window.innerHeight) - 200);
    }
    apiY.start({y: down && yDelta < 0 ? yDelta : dropPosition});
    apiBR.start({borderRadius: (down && yDelta < 0) ? 40 : 0});
  })

  useEffect(() => {
    apiY.start({y: scroll}) 
    apiBR.start({borderRadius: scroll < 0 ? 40 : 0});
  }, [scroll])

  const scrollAway = () => {
    setScroll((-(window.innerHeight) - 200))
  }
  
  return (
    <animated.div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden shadow-2xl bg-gradient-to-b from-pgreen-light to-pgreen flex flex-col justify-center items-center"
      {...bind()}
      style={{y, touchAction: 'pan-up', borderRadius, width: 'inherit'}}
    >

      <div className={`h-full flex ${!landscape ? 'flex-col w-full' : 'flex-row-reverse w-2/3'} justify-center items-center`}>
        <animated.img src={prefix + "/assets/images/Me.png"} alt="Petter Skogh as a 3D character" className={`${landscape ? 'w-3/6' : 'w-5/6'}`} style={{...styleFadeIn}}></animated.img>
        <animated.div className="flex flex-col items-center" style={{...styleFadeIn}}>
          <div className={`font-raleway font-bold ${landscape ? 'text-7xl' : 'text-6xl'} text-pwhite mb-4`}>
            <animated.h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-pwhite via-pwhite" style={{...styleFromLeft}}>SKOGH</animated.h1>
            <animated.h1 className="-mt-7 ml-16" style={{...styleFromRight}}>PETTER</animated.h1>
          </div>
          <p className="text-pwhite px-10 text-center text-xl">Front end developer with a passion for innovation</p>
        </animated.div>
      </div>

      <div className="absolute bottom-2 flex flex-col text-pwhite">
        <animated.svg className="h-12 cursor-pointer" onClick={scrollAway} style={{...styleFadeIn, ...styleFadeInAndOut}} viewBox="0 0 29 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0)" filter="url(#filter0_d)">
          <path d="M22.9583 23.25V16.5L14.5 24L6.04166 16.5V23.25L14.5 30.75L22.9583 23.25Z" fill="#E6E8E6"/>
          <path d="M22.9583 12.75V6L14.5 13.5L6.04166 6V12.75L14.5 20.25L22.9583 12.75Z" fill="#E6E8E6"/>
          </g>
          <defs>
          <filter id="filter0_d" x="-4" y="0" width="37" height="44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
          </filter>
          <clipPath id="clip0">
          <rect width="36" height="29" fill="white" transform="translate(29) rotate(90)"/>
          </clipPath>
          </defs>
        </animated.svg>
      </div>
    </animated.div>
  )
}