import React from 'react'
import Router from '../../router/Router'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
const Layout = () => {
  return (
    <>
      <Header/>
      <Router />
      <Footer/>
    </>
  )
}

export default Layout