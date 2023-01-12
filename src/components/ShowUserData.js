import React from 'react'

const ShowUserData = ({name, age, job}) => {


  return (
    <div>
        <h2>Name: {name}</h2>
        <h2>Age: {age}</h2>
        <h2>Job: {job}</h2>
    </div>
  )
}

export default ShowUserData