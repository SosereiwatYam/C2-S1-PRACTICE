import React from "react";

export default function OrderCard({order, onDecrease, onIncrease}) {
  return (
    <div className="order">
      <div>
        <h4>{order.product}</h4>
        <small>${order.price}</small>
      </div>

      <div className="order-quantity">
        <div className="order-button ${!order.quantity && 'disabled'}" onClick={onDecrease}>
          -
        </div>
        <h4>{order.quantity}</h4>
        <div className="order-button" onClick={onIncrease}>
          +
        </div>
      </div>
    </div>
  );
}
