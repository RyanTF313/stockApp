import { useParams } from "react-router-dom";

const stockStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}
const listStyle = {
    listStyle: 'none'
}
function Stock({ stocks }) {
  const { symbol } = useParams();
  const stock = stocks.find((stockObj) => (stockObj.symbol === symbol));

  return (
    <div className="stock" style={stockStyle}>
      <h2>{stock.name}</h2>
      <ul>
        <li style={listStyle}>Symbol : {stock.symbol}</li>
        <li style={listStyle}>Price: {stock.lastPrice}</li>
        <li style={listStyle}>Diff: {stock.change}</li>
        <li style={listStyle}>High: {stock.high}</li>
        <li style={listStyle}>Low: {stock.low}</li>
        <li style={listStyle}>Open: {stock.open}</li>
      </ul>
    </div>
  );
}

export default Stock;
