import { Box, Divider } from "@mui/material"
import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import ItemAmount from './ItemAmount';
import SubmitOrder from "./SubmitOrder";

// This component lists out all the items in the order list. 
// It functions as a reciept
export default function OrderItems({ items, handleSubmit }) {
    return (
        <Paper sx={{ m: 1, height: '96.5%' }}>
            <Box sx={{ height: '100%' }}>
                <List sx={{ display: 'flex', height: '100%', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Box>
                        <ListItem>
                            <Typography variant="h4">
                                Items
                            </Typography>
                        </ListItem>
                        <Divider variant="middle" />
                        {items.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemText >Item: {item.name}</ListItemText>
                                <ListItemText >Quantity: {item.quantity} </ListItemText>
                                <ListItemText >Price: ${item.price} </ListItemText>
                            </ListItem>
                        ))}
                    </Box>
                    <Box >
                        <Divider variant="middle" />
                        <ListItem>
                            <ItemAmount items={items} />
                        </ListItem>
                        <ListItem sx={{ p: 3 }}>
                            <SubmitOrder handleSubmit={handleSubmit}></SubmitOrder>
                        </ListItem>
                    </Box>
                </List>
            </Box>
        </Paper>

    )
}