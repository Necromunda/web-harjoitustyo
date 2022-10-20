import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'

export default function FAQ() {
  return (
    <section>
      <h3 className="text-center mb-4 pb-2 fw-bold">FAQ</h3>
      <h6 className="text-center pb-3">
        Find the answers for the most frequently asked questions below
      </h6>

      <div className="row border-left border-right border-dark py-3">
        <div className="col-md-6 col-lg-4 mb-4">
          <h5 className="mb-3"><FontAwesomeIcon icon={faPencil} className="px-1" />What is this website?</h5>
          <p>
            <strong><u>Simple!</u></strong> With this website, you can look up your favorite
            drinks and how to make them.
          </p>
        </div>

        <div className="col-md-6 col-lg-4 mb-4 border-right border-dark">
        <span class="border-left border-dark"></span>
          <h5 className="mb-3"><FontAwesomeIcon icon={faPencil} className="px-1" />Who is the creator?</h5>
          <p>
            Creator is Johannes Rantapää
          </p>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <h5 className="mb-3"><FontAwesomeIcon icon={faPencil} className="px-1" />How do i use this website?</h5>
          <p>
            Simply type the name of the drink you want to search in to the search bar.
          </p>
        </div>
      </div>
    </section>
  )
}
