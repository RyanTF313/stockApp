import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Stock from "./pages/Stock";
import About from "./pages/About";
import Stocks from "./pages/Stocks";
import Home from "./pages/Home";
import data from "./data";

function App() {

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks" element={<Stocks stocks={data} />} />
        <Route path="/stocks/:symbol" element={<Stock stocks={data}/>} />
      </Routes>
    </div>
  );
}

export default App;
