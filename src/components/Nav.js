import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faScroll } from '@fortawesome/free-solid-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faKiwiBird} from '@fortawesome/free-solid-svg-icons'

export default function Nav() {
  return (
    <div className="container-fluid">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-3 border-bottom border-dark">
        <Link className="navbar-brand px-2" to="/"><FontAwesomeIcon icon={faKiwiBird} className="px-1"/>Cocktail finder</Link>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/" className="nav-link px-2 link-dark"><FontAwesomeIcon icon={faHome} className="px-1"/>Home</Link></li>
          <li><Link to="/faq" className="nav-link px-2 link-dark"><FontAwesomeIcon icon={faScroll} className="px-1"/>FAQs</Link></li>
          <li><Link to="/about" className="nav-link px-2 link-dark"><FontAwesomeIcon icon={faCoffee} className="px-1"/>About</Link></li>
        </ul>

      </header>
    </div>
  )
}
