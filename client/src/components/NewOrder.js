import { useEffect, useState } from "react"
import { Box } from "@mui/material";
const { v4: uuidv4 } = require('uuid');


export default function NewOrder({ setItems, items }) {
    const [item, setItem] = useState({
        id: uuidv4(),
        name: "",
        quantity: ""
    })
    const [order, setOrder] = useState({
        id: uuidv4(),
        builder_id: "",
        items: [],
        total_amount: ""
    });

    const handleOrderChange = (e) => {
        setOrder({ ...order, [e.target.name]: e.target.value })
    }
    const handleItemshange = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(order.items)
        sendData()
    }

    const handleAddItem = (e) => {
        e.preventDefault();
        console.log(item)
        setItems([...items, item]);
    }
    function sendData() {
        const payload = JSON.stringify({
            order
        })

        const headers = new Headers({
            'Content-Type': 'application/json',
            'mode': 'no-cors'
        })

        // Send data to the backend via POST
        fetch('http://localhost:3001/neworder', {  // Enter your IP address here
            method: 'POST',
            headers: headers,
            body: payload
        })
    }
    return (
        <Box width={1 / 3}>
            <h2> Create new order</h2>
            <form onSubmit={(e) => { handleAddItem(e) }}>
                Add Item:
                <br />
                <input type="text" name="name" placeholder="Item name" value={item.name} required onChange={(e) => { handleItemshange(e) }} /><br />
                <input type="number" name="quantity" placeholder="quantity" value={item.quantity} required onChange={(e) => { handleItemshange(e) }} /><br />
                <input type="submit" value="Add Item" />
            </form>
            <form onSubmit={(e) => { handleSubmit(e) }}>

                {/* Builder id */}
                <label >
                    Builder:
                </label><br />
                <input type="text" name="builder_id" value={order.builder_id} required onChange={(e) => { handleOrderChange(e) }} /><br />
                <label >
                    Amount:
                </label><br />
                <p type="number" name="total_amount" value={order.total_amount} required onChange={(e) => { handleOrderChange(e) }} /><br />
                <input type="submit" value="Submit Order" />
            </form>

        </Box>

    );
}