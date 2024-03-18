import React from 'react'
import EventCard from './EventCard'

const Events = () => {
  return (
    <div className='row pt-3' style={{paddingBottom:`55px`}}>
      <div className="col-12">
        <h2 className='mb-3'>Past Events</h2>
      </div>
      <EventCard/>
    </div>
  )
}

export default Events
