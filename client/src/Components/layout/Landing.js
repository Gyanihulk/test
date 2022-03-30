import React from 'react'
import { Link } from 'react-router-dom'
export const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Expert Guru</h1>
          <p className="lead">
            
            Create a Student profile Get connected with different Guru's in your area
          </p>
          <div className="buttons">
          <Link to ='/register' className="btn btn-primary">Sign Up</Link>
          <Link to ='/login' className="btn btn-light">Login</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
