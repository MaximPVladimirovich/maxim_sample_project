import { useEffect, useState } from "react"
import { Box, List, ListItem, Typography } from "@mui/material";
export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async function () {
      const jsonHeaders = new Headers({
        mode: 'no-cors'
      })
      const url = 'http://localhost:3001/orders';

      const res = await fetch(url, { headers: jsonHeaders });

      const data = await res.json();
      setOrders(data.flat());
    }
    getOrders().catch(console.error);
  }, []);

  return (
    <List>
      <ListItem>
        <Typography variant="h3">
          Orders
        </Typography>
      </ListItem>
      {orders.map((order, index) => {
        return (
          <List key={index}>
            <ListItem >{order.id}</ListItem>
            <ListItem>$ {order.total_amount} </ListItem>
          </List>
        )
      }
      )}
    </List>
  )
}