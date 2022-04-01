import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
const Landing = (props) => {
  console.log(props.auth.isAuthenticated);
  if(props.auth.isAuthenticated){
    return (<Navigate to ='/dashboard'/>);
    
  };
  return (
    <>
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
    
    </>
  )
}

Landing.propTypes={
  
  auth:PropTypes.object.isRequired

}
const mapStateToProps =state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);