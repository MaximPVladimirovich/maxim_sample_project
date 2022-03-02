import { Box } from "@mui/material"
import { List, ListItem, ListItemText } from "@mui/material";
import ItemAmount from './ItemAmount';
import SubmitOrder from "./SubmitOrder";

// This component lists out all the items in the order list. 
// It functions as a reciept
export default function OrderItems({ items, handleSubmit }) {
    return (
        <Box sx={{ height: '100%' }}>
            <List sx={{ display: 'flex', height: '100%', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Box>
                    <ListItem>
                        <h2>Items </h2>
                    </ListItem>
                    {items.map((item, index) => (
                        <ListItem key={index}>
                            <ListItemText >Item: {item.name}</ListItemText>
                            <ListItemText >Quantity: {item.quantity} </ListItemText>
                            <ListItemText >Price: ${item.price} </ListItemText>
                        </ListItem>
                    ))}
                </Box>
                <Box>
                    <ListItem>
                        <ItemAmount items={items} />
                    </ListItem>
                    <ListItem>
                        <SubmitOrder handleSubmit={handleSubmit} />
                    </ListItem>
                </Box>
            </List>
        </Box>
    )
}