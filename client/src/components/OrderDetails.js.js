import { List, ListItem, Typography, Paper } from "@mui/material";

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
                        <ListItem>
                            <Typography>{index + 1}:  {item.name}</Typography>
                        </ListItem>
                    )
                })}
                <ListItem>
                    <Typography sx={{ fontWeight: '550' }}>Order total:</Typography>
                    $ {numberWithCommas(order.total_amount)}
                </ListItem>
            </List>
        </Paper>

    )
}