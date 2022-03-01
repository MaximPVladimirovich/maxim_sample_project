import { useState } from "react";
import NewOrder from "./NewOrder";
import OrderItems from "./OrderItems";
import { Box } from "@mui/material";

export default function Order() {
    const [items, setItems] = useState([]);
  
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <NewOrder setItems={setItems} items={items} sx={{ flexGrow: 1 }} />
            <OrderItems items={items} sx={{ flexGrow: 1 }} />
        </Box>
    )
}