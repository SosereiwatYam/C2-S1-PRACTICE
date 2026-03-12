import React from "react";

import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";

const ORDERS = [
  {
    product: "Banana",
    price: 54.6,
    quantity: 3,
  },
  {
    product: "Computer",
    price: 100.5,
    quantity: 4,
  },
  {
    product: "Table",
    price: 1070,
    quantity: 3,
  },
];

export default function App() {
  const [orders, setOrders] = React.useState(ORDERS);
  function decreaseQuantity(index) {
    const newOrders = [...orders];
    if (newOrders[index].quantity > 0) {
      newOrders[index].quantity -= 1;
    }
    setOrders(newOrders);
  }
  function increaseQuantity(index) {
    const newOrders = [...orders];
    newOrders[index].quantity += 1;
    setOrders(newOrders);
  }
  return (
    <>
      <header>
        <h1>Your orders</h1>
      </header>

      <div className="order-list">
        {orders.map((order, index) => (
          <OrderCard
            key={index}
            order={order}
            index={index}
            onDecrease={() => decreaseQuantity(index)}
            onIncrease={() => increaseQuantity(index)}
          />
        ))}
      </div>

      <CheckoutButton total={orders.reduce((sum, order) => sum + (order.price * order.quantity), 0)} />
    </>
  );
}
