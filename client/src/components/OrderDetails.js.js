import { List, ListItem, Typography, Paper } from "@mui/material";
import { parse } from "uuid";

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function calculateTotal(order) {
    let items = order.items;
    let sum = 0;
    items.forEach(item => {
        sum += parseInt(item.quantity) * parseInt(item.price)
    })
    return sum
}

export default function OrderDetails({ order }) {
    return (
        <Paper sx={{ my: 1 }}>
            <List>
                <ListItem>
                    <Typography sx={{ fontWeight: '550' }}>
                        Order Id:
                    </Typography>
                    {order.id}
                </ListItem>
                <ListItem>
                    <Typography sx={{ fontWeight: '550' }}>
                        Items:
                    </Typography>
                </ListItem>
                {order.items.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <Typography>{index + 1}:  {item.name}</Typography>
                        </ListItem>
                    )
                })}
                <ListItem>
                    <Typography sx={{ fontWeight: '550' }}>Order total: </Typography>
                    $ {numberWithCommas(calculateTotal(order))}
                </ListItem>
            </List>
        </Paper>
    )
}