import React from 'react'
import { ContactClipboard } from './contact-clipboard'

type Props = {
  landscape: boolean
}

export const Contact: React.FC<Props> = ({landscape}) => {

  return (
    <div className="h-full w-full top-0 bg-gradient-to-b from-pgreen-light to-pgreen flex flex-col items-center text-lg">
      <p className="text-pwhite mb-2 text-xl mt-4 w-5/6">Message me at</p>
      <div className="w-5/6 mb-2">
        <ContactClipboard>skoghpetter@gmail.com</ContactClipboard>
      </div>
      <div className="w-5/6 ">
      <ContactClipboard>+46739718019</ContactClipboard>
      </div>
    </div>
  )
}