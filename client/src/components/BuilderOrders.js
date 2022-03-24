import { Box, Typography } from "@mui/material"
import OrderDetails from "./OrderDetails.js"

export default function BuilderOrders({ _orders }) {
    let has_orders = _orders.length !== 0;
    if (has_orders) {
        return (
            <Box>
//             Map orders to detail components.
                {_orders.map((order, index) => {
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
