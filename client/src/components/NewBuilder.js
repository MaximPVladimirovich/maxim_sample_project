import { useEffect, useState } from "react"

export default function NewBuilder() {
    const [builders, setBuilders] = useState([]);

    const jsonData = { name: 'Hello ' }
    function handleClick() {
        const payload = JSON.stringify({
            createdAt: '2021-04-27T11:42:32.425Z',
            name: 'NEW BUILDER',
            phone: '(850) 698-7686',
            email: 'Blair_Parker@gmail.com',
            address: [Object],
            id: '19'
        })

        const headers = new Headers({
            'Content-Type': 'application/json',
            'mode': 'no-cors'
        })

        // Send data to the backend via POST
        fetch('http://localhost:3001', {  // Enter your IP address here

            method: 'POST',
            headers: headers,
            body: payload
        })
    }
    return (
        <>
            <button onClick={() => handleClick()}>POST</button>
        </>
    )
}