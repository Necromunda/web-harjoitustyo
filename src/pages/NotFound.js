import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

export default function NotFound() {
  return (
    <main className="text-center">
      <div className="">
        <img src={require("../pics/404.gif")} width="500" alt="404" />
      </div>
      <Link to="/"><button type="button" className="btn btn-outline-dark"><FontAwesomeIcon icon={faHome} className="px-1" />Go home</button></Link>
    </main>
  )
}
