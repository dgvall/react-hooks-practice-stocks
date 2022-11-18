import React, {useState} from "react";

function Stock({id, ticker, name, type, price, onAddStock, onRemoveStock}) {
  const [setCloned] = useState(false)

  function handleClick() {
      if(onAddStock) {
        const myNewStock = {
          ticker: ticker,
          name: name,
          type: type,
          price: price,
        }
        onAddStock(myNewStock)
      } else {
        onRemoveStock(ticker)
    }
    }

  return (
    <div
    onClick = {handleClick}
    >
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
