import React,{useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import { getProfileById } from '../../actions/profile';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ProfileTop from './ProfileTop';
const Profile = ({getProfileById,profile:{profile,loading},auth})=> {
   let {id}=useParams(); 
  
    useEffect(()=>{
      getProfileById(id);
    },[getProfileById,id]);
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
    <Link to='/profiles' className='btn btn-primary'>Back To Profiles</Link>
    {auth.isAuthenticated && auth.loading===false && auth.user._id===profile.user._id &&(<Link to='/edit-profile' classname='btn btn-primary'>Edit profile</Link>)}
    <div class="profile-grid my-1">
      <ProfileTop profile={profile}/>

      </div>
    </>)
  }

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
    profile:PropTypes.object.isRequired,
    auth:PropTypes.object.isRequired
}
const mapStateToProps =state=>({
    profile: state.profile,
    auth:state.auth,
    user:state.user
});

export default connect(mapStateToProps,{getProfileById}) (Profile)