import { useState } from "react"

const ManageData = () => {
    let someData = 10

    const [number, setNumber] = useState(9)

  return (
    <div>
        <p>Valor {someData}</p>
        <button onClick={() => {someData = 15}}>Mudar variavel</button>
        <p>Valor: {number}</p>
        <button onClick={() => {setNumber(15)}}>Mudar variavel</button>

    </div>
  )
}

export default ManageData