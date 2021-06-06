import React, { ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Layout = ({ children, title = 'Petter Skogh' }: Props) => {

  return(
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href={prefix + "/favicon.ico"} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
      </Head>
      {children}
      
    </div>
  )
}

export default Layout