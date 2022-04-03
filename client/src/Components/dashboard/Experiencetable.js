import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { deleteExperience } from '../../actions/profile';
import { connect } from 'react-redux';


const Experiencetable = ({experience,deleteExperience}) => {
  const experiences =experience.map(exp=>(
    <tr key ={exp._id}>
        <td>{exp.company}</td>
        <td className='hide-sm'>{exp.title}</td>
        <td>
            <Moment format='YYYY/MM/DD'>{exp.from}</Moment> - {' '}{exp.to===null ? ('Now') :(<Moment format='YYYY/MM/DD'>{exp.to}</Moment>)}
        </td>
           <td >
        <button className='btn btn-danger' onClick={() => deleteExperience(exp._id)}>Delete</button>
        </td>
    </tr>
))
  return (
    <>
    <h2 className="my-2"> Experiences </h2>
    <table className="table">
        <thead>
            <tr>
                <th>Company</th>
                <th className='hide-sm'>Title</th>
                <th className-='hide-sm'>Years</th>

            </tr>
        </thead>
        <tbody>
        {experiences}
        </tbody>
     </table>
    </>
  )
}
Experiencetable.propTypes={
  experience :PropTypes.array
}
export default connect(null,{deleteExperience}) (Experiencetable)