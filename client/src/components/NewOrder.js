import { useEffect, useState } from "react"
const { v4: uuidv4 } = require('uuid');

export default function NewOrder() {
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
        setOrder({ ...order, items: { ...order.items, [e.target.name]: e.target.value } })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendData()
    }

    const handleAddItem = (item) => {
        order.items.push(item);
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
        <div className="App">
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <h2> Create new order</h2>
                {/* Builder id */}
                <label >
                    Builder:
                </label><br />
                <input type="text" name="builder_id" value={order.builder_id} required onChange={(e) => { handleOrderChange(e) }} /><br />
                <label >
                    Add Item:
                </label><br />
                <input type="text" name="name" value={item.name} required onChange={(e) => { handleItemshange(e) }} /><br />
                <input type="number" name="quantity" value={item.quantity} required onChange={(e) => { handleItemshange(e) }} /><br />
                <label>
                    Amount:
                </label><br />
                <p type="number" name="total_amount" value={order.total_amount} required onChange={(e) => { handleOrderChange(e) }} /><br />
                <input type="submit" value="Submit Order" />
            </form>
        </div>
    );
}