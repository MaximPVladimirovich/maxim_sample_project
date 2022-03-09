import { useEffect, useState } from "react"
import { Box, Accordion, AccordionSummary, Typography, AccordionDetails } from "@mui/material";
import BuilderOrders from './BuilderOrders';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// This page displays all the current builders.
export default function Builders() {
    const [builders, setBuilders] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Get builder orders.
        const getOrders = async function () {
            const jsonHeaders = new Headers({
                mode: 'no-cors'
            })
            const url = "http://localhost:3001/orders"
            const res = await fetch(url, { headers: jsonHeaders });
            const data = await res.json();
            setOrders(data);
        }

        const getBuilders = async function () {
            const jsonHeaders = new Headers({
                mode: 'no-cors'
            })
            const url = "http://localhost:3001/builders";
            // Fetch data from node server.
            const res = await fetch(url, { headers: jsonHeaders });
            // Parse data into json.
            const data = await res.json();
            // Set state with result.
            setBuilders(data);
        }
        getBuilders().catch(console.error)
        getOrders().catch(console.error);
    }, [])

    return (
        <Box width={1 / 2} sx={{ mx: 'auto', my: 2 }}>
            {
                builders.map((builder, index) => {
                    let _orders = orders.filter(order => {
                        return order._ORDER_BUILDER_ID === builder.id;
                    })
                    return (
                        <Accordion key={index}>
                            <AccordionSummary expandIcon={< ArrowDropDownIcon />} aria-controls={`${builder.id}`} id={`${builder.id}`}>
                                <AccountCircleIcon sx={{ m: 1 }} />
                                <Typography sx={{ m: 1, fontWeight: 'light' }}>
                                    {builder.name}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <BuilderOrders _orders={_orders} />
                            </AccordionDetails>
                        </Accordion>
                    )
                })
            }
        </Box>
    )
}