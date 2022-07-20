import React from 'react'
import Logo from './Logo'

const Navbar = () => {
  const navBarStyle = {
    padding: "1rem",
    marginBottom: '1rem',
    boxShadow: "0 0 10px rgba(0,0,0,0.3)"
  }

  return (
    <div style={navBarStyle}>
        <Logo />
    </div>
  )
}

export default Navbar