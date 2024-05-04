import React from 'react'
import { FaStar } from "react-icons/fa";
import './index.css'

const DisplayAllJobs = (props) => {
  const {jobsItem} = props
  return (
   <li className='jobs-card'>
    <div className="title-icon-rating-cont">
      <img className='all-logo' src={jobsItem.company_logo_url} />
      <div>
          <h4 className='title-item'>{jobsItem.title}</h4>
          <FaStar className='icon'></FaStar>
          <span className='rating'>{jobsItem.rating}</span>
      </div>
      <div className='location-emptype-pakacge-cont'>
        <div>
        <span></span>
        <p>{jobsItem.location}</p>
        <span></span>
        <p>{jobsItem.employment_type}</p>
        </div>
      </div>
    </div>
   </li>
  )
}

export default DisplayAllJobs
