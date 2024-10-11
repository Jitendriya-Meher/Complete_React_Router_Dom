import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Jobs = () => {

    const jobsData = useLoaderData();

  return (
    <div className='jobs'>
        {
            jobsData.map((job) => (
                <Link key={job.id.toString()}
                to={`${job.id}`}
                >
                    <h4>job : {job.title}</h4>
                    <p>location  : {job.location}</p>
                </Link>
            ))
        }
    </div>
  )

}

export default Jobs

export const jobsLoader = async () => {

    const res = await fetch("http://localhost:5000/jobs");

    if( !res.ok){
        throw Error("Colud not found the jobs");
    }

    const data = await res.json();

    return data;

}