import { useState } from "react"
import { Box } from "@mui/material";
import AddItem from "./AddItem";
import SelectBuilder from "./SelectBuilder";
import ScrollMenu from "./ScrollMenu";
import OrderItems from "./OrderItems";

// Creates long id numbers.
const { v4: uuidv4 } = require('uuid');

export default function NewOrder({ setItems, items, builders }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selected, setSelected] = useState('');

    // Item
    // This will be added to the items array in an Order.
    const [item, setItem] = useState({
        id: uuidv4(),
        name: "",
        quantity: "",
        price: ""
    })
    // Order.
    // A single order, one builder has to be assigned per order.
    const [order, setOrder] = useState({
        id: uuidv4(),
        builder_id: "",
        items: [],
        total_amount: ""
    });

    // Adds an item to the Order item array.
    const handleAddItemOrder = (item) => {
        order.items.push(item)
    }
    // Updates an item's attributes.
    const handleItemChange = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value })
    }

    // Submits Order.
    const handleSubmit = (e) => {
        let id = order.builder_id;
        let order_items = order.items.length;
        let total_amount = order.total_amount;
        if (id === "" || order_items.length === 0 || total_amount === "") {
            alert('Something is wrong. Please look over your order.')
        } else {
            e.preventDefault();
            console.log(order)
            postOrder()
            setItems([])
            setOrder({
                id: uuidv4(),
                builder_id: "",
                items: [],
                total_amount: 0
            })
            setSelected("");
        }

    }

    // Validates and adds an item.
    // This also resets the Items and Order states.
    const handleAddItem = (e) => {
        // Item cannot be added unless builder is set.
        let no_builder_selected = order.builder_id === "";
        e.preventDefault();
        if (item.name === "" || item.quantity === "" || no_builder_selected) {
            alert("Please fill out the item details.")
            setItem({
                id: uuidv4(),
                name: "",
                price: "",
                quantity: ""
            })
        } else {
            setItems([...items, item]);
            handleAddItemOrder(item)
            console.log("First total", order.total_amount)
            setOrder({ ...order, total_amount: order.total_amount += parseInt(item.price) })
            console.log(order.total_amount)
        }

        setItem({
            id: uuidv4(),
            name: "",
            price: "",
            quantity: ""
        })
    }

    // Opens builder modal.
    const onOpen = e => {
        setAnchorEl(e.currentTarget);
    };

    // Closes builder modal.
    const onClose = () => {
        setAnchorEl(null);
    };

    // Sets the selected builder.
    const onSelect = selected => () => {
        setSelected(selected);
        setOrder({ ...order, builder_id: selected.id })
        setAnchorEl(null);
    };

    // Send data to local node.js server.
    function postOrder() {
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
        <Box sx={{ flexGrow: 1, my: 5 }}>
            <Box sx={{ width: '60%', mx: 'auto' }}>
                <Box sx={{ display: 'flex' }}>
                    <Box width={1 / 2} >
                        <SelectBuilder selected={selected} onOpen={onOpen} />
                        <AddItem item={item} handleItemChange={handleItemChange} handleAddItem={handleAddItem} />
                    </Box>
                    <Box width={1 / 2}>
                        <OrderItems items={items} handleSubmit={handleSubmit} />
                    </Box>

                    <ScrollMenu builders={builders} item={item} onSelect={onSelect} anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose} />
                </Box>
            </Box >
        </Box >
    );
}