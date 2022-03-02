import { useState, useEffect } from "react";
import NewOrder from "./NewOrder";
import { Box } from "@mui/material";

export default function Order() {
    const [items, setItems] = useState([]);
    const [builders, setBuilders] = useState([]);

    // Redundant code since this is already in builders.js.
    // Maybe move this into a single file...
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
        <Box sx={{ flexGrow: 1, mx: 2, height: '50%' }}>
            <NewOrder setItems={setItems} builders={builders} items={items} />
        </Box>
    )
}