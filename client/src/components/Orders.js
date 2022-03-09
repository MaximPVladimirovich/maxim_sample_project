import { useEffect, useState } from "react"

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
      console.log(data)
      setOrders(data);
    }
    getOrders().catch(console.error);
  }, []);

  return (
    <>
      <h2>Display Orders</h2>
      {orders.map((order, index) => {
        return (
          <p key={index}>{order._ORDER_ID}</p>
        )
      })}
    </>
  )
}