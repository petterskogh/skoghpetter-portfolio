import { useState } from 'react'
import { useSpring, animated } from 'react-spring'


export const ContactClipboard = ({children}) => {

  const [copied, setCopied] = useState<boolean>(false);

  const styleIn = useSpring({ 
    transform: `rotate(${copied ? 0 : 90}deg)`,
    onRest: () => {setCopied(false)}
  })

  const styleColorIn = useSpring({
    backgroundColor: `rgba(0, 150, 215, ${copied ? 0.5 : 0})`
  })

  const styleFadeIn = useSpring({
    opacity: copied ? 0 : 1,
  })

  const styleFadeOut = useSpring({
    opacity: copied ? 1 : 0,
  })

  return (
    <div className="flex w-full h-12 rounded-md overflow-hidden">
      <div className="bg-pwhite w-5/6 flex items-center pl-4">
        <p>{children}</p>
      </div>
      <div className="h-full w-1/6 bg-pwhite text-center shadow-l" onClick={() => {
        setCopied(true); 
        navigator?.clipboard?.writeText(children);
      }}>
        <animated.div className="h-full w-full flex justify-center items-center " style={{...styleColorIn}}>
        
        {!copied ?
          <animated.svg className="w-1/2 max-h-8 fill-current text-black" style={{...styleFadeIn}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
          </animated.svg>
        :
          <animated.svg className="w-1/2 max-h-8 fill-current text-black" style={{...styleIn}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
          </animated.svg>
        }

        <animated.p className={`-mt-24 absolute ${copied ? 'block' : 'hidden'} bg-pwhite rounded-md px-3 py-1`} style={{...styleFadeOut}}>Copied!</animated.p>

        </animated.div>
      </div>
    </div>
  )
}