import React from "react";
import Stock from "./Stock";

function PortfolioContainer({myStocks, onRemoveStock}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      { myStocks[0]
        ? myStocks.map((s) => {
          return (
            <Stock
            key = {s.ticker}
            id = {s.id}
            ticker = {s.ticker}
            name = {s.name}
            type = {s.type}
            price = {s.price}
            onRemoveStock = {onRemoveStock}
            />
          )
        })
        : null
      }
    </div>
  );
}

export default PortfolioContainer;
