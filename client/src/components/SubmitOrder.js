import { Box, Button } from "@mui/material";

export default function SubmitOrder({ handleSubmit }) {
    return (
        <Box>
            <Button variant="outlined" onClick={(e) => handleSubmit(e)}>Submit Order</Button>
        </Box>
    )

}