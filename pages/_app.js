import '../styles/global.scss'
import React from 'react'
import App from 'next/app'
import { AnimatePresence } from 'framer-motion';

class MyApp extends App {
  render(){
    const { Component, pageProps, router} = this.props;

    return (
      // <AnimatePresence exitBeforeEnter>
      // </AnimatePresence>
      <Component {...pageProps} key={router.route} />

    )
  }
}

export default MyApp;