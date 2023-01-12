import { useState } from "react"

const ListRender = () => {

    const [users, setUsers] = useState([
        { id: 1, name: 'Veri', age: 27 },
        { id: 2, name: 'Bruno', age: 27 },
        { id: 3, name: 'Renan', age: 27 },

    ])

    const deleteUser = () => {
        const randomNum = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => {

            return prevUsers.filter((user) => randomNum !== user.id)

        })


    }



    return (

        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))}
            </ul>
            <button onClick={deleteUser}>Delete random user</button>
        </div>
    )
}

export default ListRender