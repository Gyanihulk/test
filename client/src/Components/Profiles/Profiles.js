import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import {connect } from 'react-redux';
import {getProfiles} from '../../actions/profile'
import Profileitem from './Profileitem';

const Profiles = ({getProfiles,profile:{profiles,loading}}) => {
    useEffect(()=>{
        getProfiles();
    },[]
    );
    return loading 
    ?(<div class="card-body">
    <div class="padding_5">
     <div class="icon-center">
       <i class="fas fa-sync fa-spin fa-2xl" aria-hidden="true" alt ='Loading...'></i>
     </div>
    </div>
   </div> 
    )
   :(<>
   <h1 className="large text-primary">Guru's</h1>
   <p className="lead">
       <i className="fab fa-conectdevelop"></i> {'  '}Browse And Connect With Guru's
   </p>
   <div className="profiles">
       {profiles.length > 0 
       ?(<>
       {profiles.map(profile =>(<Profileitem key ={profile._id} profile={profile}/>))}
       </>
       )
       :(<> NO Profile to show</>)}
    
   </div>
   </>
    
  )
}

Profiles.propTypes = {
    getProfiles:PropTypes.func.isRequired,
    profile:PropTypes.object.isRequired
}

const mapStateToProps =state=>({
    profile: state.profile
})
export default connect(mapStateToProps,{getProfiles})(Profiles);