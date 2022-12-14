import React from 'react'

export default function About() {
  return (
    <div id="about-page" className="text-center">
      <div className="">
        <h1>About Us Page</h1>
        <p>Website created by Johannes Rantapää as a final assignment for the web-devlopment course.</p>
      </div>
      <h2>Our Team</h2>
      <div className="row d-flex justify-content-center">
        <div className="card border border-dark">
          <img src={require("../pics/profile_picture.jpg")} className="my-1" alt="creator" />
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
  )
}
