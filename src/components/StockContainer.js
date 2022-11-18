import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, onAddStock}) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((s) => {
        return (
          <Stock
          key = {s.id}
          id = {s.id}
          ticker = {s.ticker}
          name = {s.name}
          type = {s.type}
          price = {s.price}
          onAddStock = {onAddStock}
          />
        )
      })}
    </div>
  );
}

export default StockContainer;
