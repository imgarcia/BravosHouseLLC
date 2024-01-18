import './App.scss'
import { Link, Outlet } from 'react-router-dom'

const App = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="app-wrapper">
      <header>
        <Link to="/">
          <img
            src="./bravoshousellc-logo.png"
            className="app-logo"
            alt="Bravos House LLC Logo"
          />
        </Link>
      </header>
      <div className="app-body">
        <Outlet />
      </div>
      <footer>&copy; {currentYear} Bravos House, LLC</footer>
    </div>
  )
}

export default App
