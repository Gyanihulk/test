import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { addEducation } from '../../actions/profile';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const AddEducation = ({addEducation}) => {
    const [formData,setFormData] = useState({
        school:'',
        degree:'',
        fieldofstudy:'',
        from:'',
        to:'',
        current:false,
        description:''
    });
    const [toDateDisabled,toggleDisabled]=useState(false);
    const {school ,degree,fieldofstudy,from,to,currect,description}=formData;
    const onchange =e=> setFormData({...formData,[e.target.name]:e.target.value});
  return (
    <>
    
    <h1 className="large text-primary">
     Add An Education
    </h1>
    <p className="lead">
      <i className="fas fa-code-branch"></i> Add any Education you had
    </p>
    <small>* = required field</small>
    <form className="form" onSubmit={e=>{
        e.preventDefault();
        addEducation(formData);;
    }}>
      <div className="form-group">
        <input type="text" placeholder="* school" name="school" value ={school} onChange={e=>onchange(e)} required />
      </div>
      <div className="form-group">
        <input type="text" placeholder="* degree" name="degree" value ={degree} onChange={e=>onchange(e)} required required />
      </div>
      <div className="form-group">
        <input type="text" placeholder="fieldofstudy" name="fieldofstudy" value ={fieldofstudy} onChange={e=>onchange(e)} required  />
      </div>
      <div className="form-group">
        <h4>From Date</h4>
        <input type="date" name="from" value ={from} onChange={e=>onchange(e)} required />
      </div>
       <div className="form-group">
        {/* <p><input type="checkbox" name="current" checked= {current} value ={current} onChange={e=>{setFormData({ current:!current,...formData});
                            toggleDisabled(!toDateDisabled);}}  /> {'  '} Current Job</p> */}
      </div>
      <div className="form-group">
        <h4>To Date</h4>
        <input type="date" name="to" value ={to} onChange={e=>onchange(e)} disabled={toDateDisabled ? 'disabled' :''} required  />
      </div>
      <div className="form-group">
        <textarea 
          name="description"
          cols="30"
          rows="5"
          placeholder="Job Description"
          value ={description} onChange={e=>onchange(e)}
        ></textarea>
      </div>
      <input type="submit" className="btn btn-primary my-1" />
      <Link to ="/dashboard" className="btn btn-light my-1" >Go Back</Link>
    </form>
  
  </>
  )
}

AddEducation.propTypes = {}

export default connect(null,{addEducation})(AddEducation)