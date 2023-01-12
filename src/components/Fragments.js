import React from 'react'

const Fragments = ({propFragment}) => {
  return (
    <>
    {/* Com a div vazia, esses elementos serao jogados no elemento pai
    em que forem inseridos */}
        <h2>First Title</h2>
        <h3>Second Title</h3>
        <h4>{propFragment}</h4>
    </>
  )
}

export default Fragments