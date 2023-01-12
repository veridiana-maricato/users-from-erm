import { useState } from "react"


const ConditionalRender = () => {

    const [x] = useState(false)
  return (
    <div>
        {x && <p>If true, x</p>}
        {!x && <p>If false, x</p>}
    </div>
  )
}

export default ConditionalRender