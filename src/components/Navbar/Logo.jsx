import React from 'react'

const Logo = () => {
  const logoStyle = {
    display: "flex",
    width: "200px",
  }

  return (
    <>
        <img style={logoStyle} src='./airbnb-logo.png'></img>
    </>
  )
}

export default Logo