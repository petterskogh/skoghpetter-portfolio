import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

type Props = {
  onClick(): void
}

export const SliderButton: React.FC<Props> = ({onClick}) => {

  const [selected, setSelected] = useState<boolean>(false);

  const styleColor = useSpring({
    backgroundColor: selected ? 'rgb(0, 175, 225)' : 'rgb(175, 175, 175)'
  })

  const stylePosition = useSpring({
    transform: selected ? 'translateX(36px)' : 'translateX(5px)',
  })

  return (
    <animated.div className="h-8 flex items-center rounded-full" style={{...styleColor, width: '65px'}} 
      onClick={() => {setSelected(!selected); onClick()}}
    >
      
      {/* Ball */}
      <animated.div className="h-6 w-6 bg-pwhite rounded-full shadow-md" style={{...stylePosition}}></animated.div>
    </animated.div>
  )
}