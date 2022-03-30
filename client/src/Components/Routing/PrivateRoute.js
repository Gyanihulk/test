import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Navigate } from 'react-router-dom'
import Register from '../auth/Register';

const PrivateRoute=(props) =>{


        if(!props.auth.isAuthenticated){
        return (<Navigate to ='/login'/>);
        }
        console.log(props.children)
        return (props.children)
        
};

PrivateRoute.propTypes = {
    auth:PropTypes.object.isRequired
};

const mapStateToProps =state=>({
    auth: state.auth
  });

export default connect(mapStateToProps)(PrivateRoute)