import React from 'react'
import Contact from '../pages/Contact'
import { Outlet } from 'react-router-dom'

const ContactLayout = () => {
  return (
    <div>

        <Contact></Contact>

        <Outlet></Outlet>

    </div>
  )
}

export default ContactLayout