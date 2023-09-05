import { Link } from "react-router-dom";

const stocksStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
const titleStyle = {
  fontSize: "32px",
};
const tableStyle = {
  width: "100%",
};
const rowStyle = {
  display: "flex",
  flexDirection: 'row',
  width: "100%",
};
const companyNameStyle = {};
function Stocks({ stocks }) {

    return (
    <div className="Stocks" style={stocksStyle}>
      <h2 style={titleStyle}>Most Active Stocks</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Price</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {stocks.length > 0 &&
            stocks.sort((a,b) => b.lastPrice-a.lastPrice).map((stock) => (
              <tr key={stock.symbol}>
                <td><Link to={'/stocks/' + stock.symbol}>{stock.name}</Link></td>
                <td>{stock.lastPrice}</td>
                <td>{stock.change}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Stocks;
