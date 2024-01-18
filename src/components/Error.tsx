import '../App.scss'
import './Error.scss'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <div className="box error-wrapper">
      <h1>Oops!</h1>
      <h3>Error 404 - Page Not Found</h3>
      <div className="link-button">
        <Link to="/">Go to Home</Link>
      </div>
    </div>
  )
}
