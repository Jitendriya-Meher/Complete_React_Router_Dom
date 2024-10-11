import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

const ErrorPage = () => {

    const error = useRouteError();

    const navigate = useNavigate();

  return (
    <div className='job-details'>
        <h1>
            An Error Occurred.
        </h1>
        <p>
            {error.message}
        </p>

        <button
        onClick={() => {
            navigate("/");
        }}
        >
            Go To Home Page
        </button>

    </div>
  )
}

export default ErrorPage