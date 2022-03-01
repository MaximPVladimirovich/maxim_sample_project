import { useEffect, useState } from "react"

export default function Builders() {
    const [builders, setBuilders] = useState([]);

    useEffect(() => {
        const getBuilders = async function () {
            const jsonHeaders = new Headers({
                mode: 'no-cors'
            })
            const url = "http://localhost:3001";
            // Fetch data from node server.
            const res = await fetch(url, { headers: jsonHeaders });
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
                    <p key={index} sx={{ mx: 'auto' }}>{builder.name}</p>
                )
            })}
        </>
    )
}