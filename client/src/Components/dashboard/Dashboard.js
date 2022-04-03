import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { deleteAccount, getCurrentProfile } from '../../actions/profile';
import DashboardActions from './DashboardActions';
import Experiencetable from './Experiencetable';  

import { Link } from 'react-router-dom'
import EducationTable from './EducationTable';

const Dashboard=({deleteAccount,getCurrentProfile,auth:{user},profile:{profile,loading }}) =>{
  useEffect(()=>{
    getCurrentProfile()
  },[]);
  
  return loading && profile ===null 
  ?(<div class="card-body">
  <div class="padding_5">
   <div class="icon-center">
     <i class="fas fa-sync fa-spin fa-2xl" aria-hidden="true" alt ='Loading...'></i>
   </div>
  </div>
 </div> 
  )
 :(
  <>
  <h1 className ="large text-primary">Dashboard</h1>
  <p className="lead"><i className="fas fa-user"></i> Welcome {user && user.name}</p>
  {profile!==null ?
  <>
  <div><DashboardActions/></div> 
  <div><Experiencetable experience={profile.experience}/></div>
  <div><EducationTable education={profile.education}/></div>
  <button className='btn btn-danger' onClick={() => deleteAccount()}><i className="fas fa-user-minus"></i> Delete My account</button>
  </>
  :<>
  <p>You have not yet setup a profile,please add some info</p>
  <Link to='/create-profile' className='btn btn-primary my-1'>Create Profile</Link>
  </>}
  
  
  </>
 )
  };

  Dashboard.propTypes={
    getCurrentProfile:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired,
    profile:PropTypes.object.isRequired,
  };

const mapStatetoProps=state=>({
  auth:state.auth,
  profile:state.profile
});

export default connect(mapStatetoProps,{deleteAccount,getCurrentProfile})(Dashboard) ;