import React from "react";
import NextHead from 'next/head'


const Head = ({title}) => {

  return (
    <NextHead>
      <title>{title}</title>

      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>

      <meta name="description" content="CEOS - Empresa Júnior de Computação"/>
      <meta name="keywords" content="Site, UFC, Computação"/>

      <meta property="og:type" content="website"/>
      <meta property="og:locate" content="pt_BR"/>
      <meta name="og:description" content="CEOS - Empresa Júnior de Computação"/>
      <meta property="og:title" content={title}/>
      {/* <meta property="og:url" content={url}/> */}
      {/* <meta property="og:image" content={image}/> */}
    </NextHead>
  )
}

export default Head;
