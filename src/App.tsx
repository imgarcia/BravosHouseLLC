import React from 'react'
import './App.scss'

const App = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="app-wrapper">
      <header>
        <img
          src="/bravoshousellc-logo.png"
          className="app-logo"
          alt="Bravos House LLC Logo"
        />
      </header>
      <div className="app-body">
        <div className="box">
          <h2>Welcome to our client portal</h2>
          <p>
            Are you ready to build your new home? Let's get you a quote right
            away!
          </p>
          <p>Click on the button below to begin your quote today!</p>
          <a className="link-button" href="#" rel="noopener noreferrer">
            Begin My Quote
          </a>
        </div>
      </div>
      <footer>&copy; {currentYear} Bravos House, LLC</footer>
    </div>
  )
}

export default App
