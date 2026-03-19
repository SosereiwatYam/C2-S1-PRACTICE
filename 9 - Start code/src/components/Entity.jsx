import React from "react";

function Entity({ label, health }) {
  return (
    <section className="container">
      <h2>{label}</h2>
      <div className="healthBar">
        <div className="healthBar__value" style={{ width: `${health}%` }}>
          {health}
        </div>
      </div>
    </section>
  );
}

export default Entity;
