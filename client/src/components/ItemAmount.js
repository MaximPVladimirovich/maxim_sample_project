import { Box, Typography } from "@mui/material";

export default function ItemAmount({ items }) {
    let sum = 0;
    if (items.length !== 0) {
        items.map(item => sum += parseInt(item.price) * parseInt(item.quantity))
    }
    return (
        <Box>
            <Typography>Total: ${sum}</Typography>
        </Box>

    )
}