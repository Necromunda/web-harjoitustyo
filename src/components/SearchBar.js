import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function SearchBar() {
  return (
      <form className="form-inline d-flex justify-content-center">
        <div className="input-group w-50">
          <input type="search" className="form-control outline-dark" placeholder="Search..." />
          <button onClick={alert()} type="button" className="btn btn-outline-dark input-group-append"><FontAwesomeIcon icon={faSearch} className="px-3" /></button>
        </div>
      </form>
  )
}
