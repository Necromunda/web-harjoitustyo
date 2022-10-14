import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  const [input, setInput] = useState('')

  const exec = () =>  {
    alert(input)
  }

  return (
    <form className="form-inline d-flex justify-content-center">
        <div className="input-group w-50">
          <input type="search" className="form-control outline-dark" placeholder="Search..." onChange={e => setInput(e.target.value)}/>
          <button type="button" className="btn btn-outline-dark input-group-append" onClick={exec}><FontAwesomeIcon icon={faSearch} className="px-3" /></button>
        </div>
      </form>
  )
}
