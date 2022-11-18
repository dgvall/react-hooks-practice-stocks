import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({stocks, onAddStock, myStocks, onRemoveStock, setFilterBy, setSortBy}) {
  return (
    <div>
      <SearchBar
      setFilterBy = {setFilterBy}
      setSortBy = {setSortBy}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer
          stocks = {stocks}
          onAddStock = {onAddStock}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
          onRemoveStock = {onRemoveStock}
          myStocks = {myStocks}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
