import React from 'react'
import './Card.css'
export default function Card({ data }) {
  return (
    <>
      <div className='card-wrapper'>

        <div className='img-card-area'><img src={data.avatar} alt="" /></div>
        <div className='name-area' >
          <p>{data.first_name}</p>
          <p>{data.last_name}</p>
          <p className='email'>{data.email}</p>
        </div>




      </div>
    </>
  )
}

