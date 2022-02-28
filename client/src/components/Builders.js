import { useEffect, useState } from "react"

export default function Builders() {
    const [builders, setBuilders] = useState([]);

    useEffect(() => {
        const getBuilders = async function () {
            const url = "http://localhost:3001";
            // Fetch data from node server.
            const res = await fetch(url);
            // Parse data into json.
            const data = await res.json();
            // Set state with result.
            setBuilders(data);
        }
        getBuilders().catch(console.error)
    }, [])

    return (
        <>
            {builders.map((builder, index) => {
                return (
                    <p key={index}>{builder.name}</p>
                )
            })}
        </>
    )
}