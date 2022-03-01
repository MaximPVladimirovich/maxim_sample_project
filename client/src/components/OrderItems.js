import { Box } from "@mui/material"
import { List, ListItem, ListItemText } from "@mui/material";

export default function OrderItems({ items }) {
    return (
        <Box width={1 / 3}>
            <List>
                <ListItem>
                    <h2>Items </h2>
                </ListItem>
                {items.map((item, index) => (
                    <ListItem key={index}>
                        <ListItemText >Item: {item.name}</ListItemText>
                        <ListItemText >Quantity: {item.quantity} </ListItemText>
                    </ListItem>
                ))}
            </List>
        </Box >
    )
}