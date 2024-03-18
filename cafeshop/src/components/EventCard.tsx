import React from 'react'
import { Link } from 'react-router-dom'

const EventCard = () => {
  return (
    <div className='col-12'>
      <div className="card event-card-bg position-relative">
        <div className="position-absolute" style={{bottom:`20px`,left:`20px`}}>
        <h4 className='text-light m-0'>Dj Kungs</h4>
        <span className='text-secondary font-weight-light'>@kungs</span>
        </div>
        <div className="position-absolute text-center bg-light px-3 py-1" style={{top:`20px`,right:`20px`,borderRadius:`10px`}}>
            <p className='font-weight-bold text-dark m-0' style={{}}>
                08 
            </p>
            <p className='font-weight-light text-dark m-0'>July</p>
        </div>
      </div>
    </div>
  )
}

export default EventCard
