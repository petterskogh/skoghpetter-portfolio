import React from 'react'
import { ContactClipboard } from './contact-clipboard'

type Props = {
  landscape: boolean
}

export const Contact: React.FC<Props> = ({landscape}) => {

  return (
    <div className={`h-full w-full top-0 bg-gradient-to-b from-pgreen-light to-pgreen flex  ${landscape ? 'flex-row justify-center items-center' : 'flex-col justify-start items-center'}`}>
      
      <div className={`flex flex-col text-xl text-pwhite ${landscape ? 'w-1/3 mt-0' : 'w-5/6 mt-8'}`}>
        <p className="mb-4">Hi! My name is Petter Skogh and I'm a front end developer based in Umeå, Sweden. I'm currently finishing my master thesis as an MSCE in Interaction and Design. &#x270D;</p>
        <p>Contact me if you want to know more or maybe talk over a virtual cup of coffee! ☕</p>
      </div>
      
      <div className={`flex flex-col items-center text-lg ${landscape ? 'w-1/3 mt-0 px-10' : 'w-5/6 mt-8 px-0'}`}>
        {/*<p className="text-pwhite mb-2 text-xl w-full">Connect with me at</p>*/}
        <div className="mb-3 w-full">
          <ContactClipboard>skoghpetter@gmail.com</ContactClipboard>
        </div>
        <div className="mb-3 w-full">
          <ContactClipboard>+46739718019</ContactClipboard>
        </div>
        <div className="text-pwhite">[ <a className="hover:underline" href="https://www.linkedin.com/in/petter-skogh-6a7620178" target="_blank">LinkedIn</a> ]</div>
      </div>
      

    </div>
  )
}