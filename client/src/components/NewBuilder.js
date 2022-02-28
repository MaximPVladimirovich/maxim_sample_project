import { useEffect, useState } from "react"

export default function NewBuilder() {
    const [builders, setBuilders] = useState([]);

    const jsonData = { name: 'Hello ' }
    function handleClick() {
        const payload = JSON.stringify({
            name: 'SHOWING IN THE CONSOLE!!!!'
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