import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { logout } from "../../actions/auth";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
const Navbar = ({auth :{isAuthenticated,loading  },logout})=>{
const authLinks=(
                <ul>
                    <li><Link to ='/profiles'> GURU'S</Link></li>
                    <li><Link to ='/dashboard'>
                            <i className="fas fa-user">
                            <span className="hide-sm">Dashboard</span></i></Link>
                    </li>
                    <li>
                            <a onClick={logout} href='#!'>
                            <i className="fas fa-sign-out-alt"></i> { '  '}
                            <span className="hide-sm"> LOG OUT </span></a>
                    </li>          
                    
                    
                </ul>
);

const guestLinks=(
    <ul>
        <li><Link to ='/profiles'> GURU'S</Link></li>
        <li><Link to ='/register'>Register</Link></li>
        <li><Link to ='/login'>Login</Link></li>
    </ul>


);

    return(
       <div>
           <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            LOGO
          </Typography>
          </Toolbar>
      </Container>
    </AppBar>

            <nav className="navbar bg-dark">
                <h1>
                    <Link to ='/'><i className="fas fa-code"></i> ExpertGuru</Link>
                    </h1>
                    <div>
                {!loading && (<Fragment>{ isAuthenticated ? authLinks :guestLinks}</Fragment>)}
                </div>
            </nav>
         </div>
      
    );
};
Navbar.propTypes={
    logout:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired

}
const mapStateToProps =state => ({
    auth :state.auth
});

export default connect(mapStateToProps,{logout})(Navbar);