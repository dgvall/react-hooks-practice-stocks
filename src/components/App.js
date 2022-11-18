import React, {useState, useEffect} from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  const [stocks, setStocks] = useState([])
  const [myStocks, setMyStocks] = useState([])
  const [filterBy, setFilterBy] = useState("")
  const [sortBy, setSortBy] = useState("Alphabetically")

  const displayedStocks = stocks
  .filter((s) => s.type.toLowerCase().includes(filterBy.toLowerCase()))
  .sort((a,b) => {
    if (sortBy === "Price") {
      return b.price - a.price
    }
    if (sortBy === "Alphabetically") {
      if(a.name < b.name) {
        return -1
      }
    }
  })

  // Add stock to my portfolio
  function handleAddStock(myStock) {
    const exists = myStocks.find((s) => s.ticker === myStock.ticker)
    
    if(!exists) {
      const updatedStocks = [...myStocks, myStock]
      setMyStocks(updatedStocks)
    }
  }

  // Removes stock from my portfolio
  function handleRemoveStock(myStockTicker) {
    const updatedStocks = myStocks
      .filter((s) => s.ticker !== myStockTicker)

    setMyStocks(updatedStocks)
  }

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then(res => res.json())
      .then(data => setStocks(data))
  }, [])

  return (
    <div>
      <Header />
      <MainContainer
      stocks = {displayedStocks}
      onAddStock = {handleAddStock}
      onRemoveStock = {handleRemoveStock}
      myStocks = {myStocks}
      setFilterBy = {setFilterBy}
      setSortBy = {setSortBy}
      />
    </div>
  );
}

export default App;
