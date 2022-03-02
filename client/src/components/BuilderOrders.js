import { Box, Typography } from "@mui/material"
import OrderDetails from "./OrderDetails.js"
export default function BuilderOrders({ orders }) {
    let has_orders = orders.length !== 0;
    if (has_orders) {
        return (
            <Box>
                {orders.map((order, index) => {
                    return (
                        <OrderDetails key={index} order={order} ></OrderDetails>
                    )
                })}
            </Box>
        )
    } else {
        return (
            <Box>
                <Typography>This builder has no orders.</Typography>
            </Box>
        )
    }
}