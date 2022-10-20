import React from 'react'

export default function About() {
  return (
    <div className="text-center border border-danger">
      <div className="">
        <h1>About Us Page</h1>
        <p>Website created by Johannes Rantapää as a final assignment for the web-devlopment course.</p>
      </div>
      <h2>Our Team</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src='profile_picture.jpg' alt="MISSING IMAGE" />
            <div className="container">
              <h2>Johannes Rantapää</h2>
              <p className="title">Creator</p>
              <p>Student at OAMK</p>
              <p>johannes.rantapaa@gmail.com</p>
              {/* <p><button className="button">Contact</button></p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
