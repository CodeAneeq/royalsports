import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

const UserLayout = ({children}) => {
  return (
    <>
    <header>
        <Navbar />
      </header>
      {children}
      <Footer />
    </>

  )
}

export default UserLayout