import React from 'react'
import { Outlet } from 'react-router-dom'

const JobsLayout = () => {
  return (
    <div className=' jobs-layout'>


        <h2>
            Jobs Openings
        </h2>
        <p>
            List of current job opening in our company.
        </p>

        <Outlet></Outlet>

    </div>
  )
}

export default JobsLayout