import { useEffect, useState } from "react"

export default function NewBuilder() {
    const [builders, setBuilders] = useState([]);

    const jsonData = { name: 'Hello ' }
    function handleClick() {

        // Send data to the backend via POST
        fetch('http://localhost:3001', {  // Enter your IP address here

            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(jsonData) // body data type must match "Content-Type" header

        })
    }
    return (
        <>
            <button onClick={() => handleClick()}>POST</button>
        </>
    )
}