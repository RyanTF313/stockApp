import { Link } from "react-router-dom";

const linkStyle = {
  color: "black",
  textDecoration: "none",
  fontSize: '20px'
};

const headerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const homeStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const paraStyle = {
  fontSize: "24px",
};
function Home() {
  return (
    <div className="Home" style={homeStyle}>
      <h1 style={headerStyle}>Welcome to my stocks SPA</h1>
      <section>
        <p style={paraStyle}>Checkout a list of stocks below</p>
        <Link to="/stocks" style={linkStyle}>
          <h3>Stocks</h3>
        </Link>
      </section>
    </div>
  );
}

export default Home;
