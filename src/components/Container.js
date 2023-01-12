import React from 'react'

const Container = ({children, myValue}) => {
  return (
    <div>
        <h2>This is the title's container</h2>
        {children}
        <p>Valor: {myValue}</p>
    </div>
  )
}

export default Container