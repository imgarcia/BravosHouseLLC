import '../App.scss'
import { Link } from 'react-router-dom'

export const Welcome = () => {
  return (
    <div className="box">
      <h2>Welcome to our client portal</h2>
      <p>
        Are you ready to build your new home? Let's get you a quote right away!
      </p>
      <p>Click on the button below to begin your quote today!</p>
      <Link className="link-button" to="./questions" rel="noopener noreferrer">
        Begin My Quote
      </Link>
    </div>
  )
}
